import React from 'react';
import Card from './Card';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstValue: 0,
      secondValue: 0,
      firstConverter: 'celsius',
      secondConverter: 'kelvin'
    }
  }
  componentDidMount() {
    this.convert();
  }

  setValue = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => { 
      return ({
        // firstValue: 0,
        // secondValue: 0,
        [name]: value,
      });
    }, () => this.convert());
  }
  
  
  setConverter = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      console.log(name, value, prevState);
      if (name === 'firstConverter' && value === prevState.secondConverter) {
        this.setState({
          firstConverter: prevState.secondConverter,
          secondConverter: prevState.firstConverter
        }, () => this.convert())
        return;
      }
      if (name === 'secondConverter' && value === prevState.firstConverter) {
        this.setState({
          firstConverter: prevState.secondConverter,
          secondConverter: prevState.firstConverter
        }, () => this.convert())
        return;
      }
      return ({ [name]: value })
    }, () => this.convert());
  }

  formulas = () => {
    return {
      'celsiuskelvin': (first) => {
        return (first + 273.15).toFixed(3);
      },
      'celsiusfahrenheit': (first) => {
        return ((first * 1.8) + 32).toFixed(3);
      },
      'fahrenheitkelvin': (first) => {
        return ((first - 32) * 0.5555 + 273.15).toFixed(3);
      },
      'fahrenheitcelsius': (first) => {
        return ((first - 32) * 0.5555).toFixed(3);
      },
      'kelvinfahrenheit': (first) => {
        return ((first - 273.15) * 1.8 + 32).toFixed(3);
      },
      'kelvincelsius': (first) => {
        return (first - 273.15).toFixed(3);
      }
    }
  }

  convert = () => {

    const firstValue = Number(this.state.firstValue);
    // const secondValue = Number(this.state.secondValue);
    // const inputValue = firstValue || secondValue;
    
    // get the values of all inputs
    // check from what to what
    
    const value = this.state.firstConverter + this.state.secondConverter;
    
    const calculate = this.formulas();
    
    this.setState(() => {
      // if (!firstValue) {
      //   return ({ firstValue: calculate[value](inputValue)});
      // }
      // if (!secondValue) {
      //   return ({ secondValue: calculate[value](inputValue)});
      // }
      return ({ secondValue: calculate[value](firstValue)});
    })
    // which input on which side
    // 

  }

  

  render() {


    return (
      <div className="App">
        <h1 style={{ color: 'lightgrey'}}>Temperature Converter</h1>
        <div className="card-container">
          <Card 
            converter={this.state.firstConverter}
            value={this.state.firstValue} 
            setValue={this.setValue}
            name="firstConverter"
            inputname="firstValue"
            setConverter={this.setConverter}
          />
          <h1 style={{ color: 'lightgrey'}}>=</h1>
          <Card 
            name="secondConverter"
            inputname="secondValue"
            converter={this.state.secondConverter}
            value={this.state.secondValue} 
            setValue={this.setValue}
            setConverter={this.setConverter}
          />
        </div>
      </div>
    );
  }
}

export default App;
