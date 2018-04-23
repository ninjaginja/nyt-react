import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Articles, Document } from "../../components/Articles";
import SaveBtn from "../../components/SaveBtn";
import Moment from 'react-moment';

class Home extends Component {
  state = {
    articles: [],
    search: "",
    title: "",
    snippet: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.setState({ articles: [] });
  }

  loadArticles = query => {
    API.search(query)
      .then(res =>
        this.setState({ articles: res.data.response.docs })
      )
      .catch(err => console.log(err));
  };

  saveArticle = articleData => {
    API.saveArticle(articleData)
      .then(res =>
        console.log(res)
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles(this.state.search);
    this.setState({ search: ""});
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>NYT Articles Search</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-3">
            </Col>
            <Col size="md-6">

              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  search={this.state.search}
                  placeholder="Enter topic to search"
                  name="search"
                />
                <FormBtn
                  disabled={!(this.state.search)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </Col>
            <Col size="md-3">
            </Col>
            <Col size="md-12 sm-12">
              <h1 style={{ fontSize: "32px" }}>Search Results</h1>
              {this.state.articles.length ? (
                <Articles>
                  {this.state.articles.map(article => (
                    <Document key={article._id}>
                      <SaveBtn onClick={() => this.saveArticle({
                        title: article.headline.main,
                        snippet: article.snippet,
                        date: article.pub_date,
                        url: article.web_url
                      })} />
                      <h2><strong>{article.headline.main}</strong></h2>
                      <p><em><Moment format="MM/DD/YYYY">{article.pub_date}</Moment></em></p>
                      <p>{article.snippet}</p>
                      <p><a href={article.web_url}>Read More</a></p>
                      <hr />
                    </Document>
                  ))}
                </Articles>
              ) : (
                <h3 style={{ fontSize: "18px" }}>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Home;
