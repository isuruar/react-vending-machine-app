import React, { Component } from 'react'
import "./Chips.css";
import chipsImg from "./Chips.png";
import { Link } from "react-router-dom";
import Message from "./Message";

class Chips extends Component {
    render() {
        return (
          <div>
            <Message>
              <h1>Chips</h1>
              <Link to="/">Go Back</Link>
            </Message>
          </div>
        );
    }
}

export default Chips
