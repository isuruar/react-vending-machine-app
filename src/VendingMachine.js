import React, { Component } from 'react'
import "./VendingMachine.css";
import {Link} from 'react-router-dom';
import vendingMachineImg from "./VendingMachine.png";
import Message from "./Message";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
        <h1>Vending Machine</h1>
        </Message>
        <Message>
        <Link exact to="/soda">Soda</Link>
        <Link exact to="/chips">Chips</Link>
        <Link exact to="/sardines">Sardines</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine
