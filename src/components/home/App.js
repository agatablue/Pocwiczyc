import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import {
  activateGeod,
  closeGeod,
} from '../../redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch("https://pocwiczyc.firebaseio.com/pocwiczyc.json").then(r=> r.json()).then(r=>{
      this.setState({
        list: r
      })
    })
   
  }
  render() {
    const el = this.state.list.map( el => {
      return <div>
         {el.text}
      </div>
    })
    return <div className="App">
        {el}

        <div>
            <h1>{this.props.geod.title || 'Hello World!'}</h1>

            {this.props.geod.title ?
              <button onClick={this.props.closeGeod}>
                Exit Geod
              </button> :
              <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                Click Me!
              </button>
            }
        </div>
      </div>
  }
}


// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;