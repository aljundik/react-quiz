import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Answer from './answer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      question: 'I am qestion number 1',
      value: 0,
      answer: '',
      userAnswer: '',
      isCorrect: false,
      submited: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://www.jservice.io/api/random`)
      .then(res => this.setState({ question: res.data[0].question, value: res.data[0].value, answer: res.data[0].answer }))
      //.then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  handleChange(event) {
    this.setState({ userAnswer: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    if (this.state.userAnswer === this.state.answer || this.state.userAnswer === this.state.answer.toLocaleLowerCase()) {
      this.setState({isCorrect: true, submited:true})
    } else {
      this.setState({isCorrect: false, submited:true})

    }
    event.preventDefault();
  }

  handleButton(event) {
    console.log('button working');
    this.setState({isCorrect: false, submited:false})
    window.location.reload();
  }

  render() {
    const isCorrect = this.state.isCorrect;
    const submited = this.state.submited;
    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <div className="mainBody">
                <form onSubmit={this.handleSubmit}>
                  <p className=" questionTitle"> Question(value: {this.state.value} points): </p>
                  <p className="question">{this.state.question}</p>
                  <textarea rows="6" className="form-control col-center marging" placeholder={this.state.answer} value={this.state.userAnswer} onChange={this.handleChange} />
                  <div className="buttoncenter">
                    <input type="submit" value="SUBMIT" />
                  </div>
                </form>
              </div>
              <div className="between">
              </div>
              <Answer 
                submited={this.state.submited}
                isCorrect={this.state.isCorrect}
                ans={this.state.answer}
                handleButton1={this.handleButton.bind(this) }
              />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
