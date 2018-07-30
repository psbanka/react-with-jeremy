import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import './App.css';

const INVENTORY = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class App extends Component {
  render() {
    let tableGuts = INVENTORY.map(currentValue => {
      let style
      if (currentValue.stocked === false) {
        style = {color: 'red'}
      }
      return <tr><td style={style}>{currentValue.name}</td><td>{currentValue.price}</td></tr>
    })

    return (
      <div className="App">
        <HeaderBar />
        <input placeholder="Search..."/>
        <br/>
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
        <br/>
        <table>
          <tbody>
            {tableGuts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
