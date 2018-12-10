import React, { Component } from 'react';
import Item from './Item'
class List extends Component {
  render() {
    return (
      <ol>
        <Item text="learn javascript" price={100} />
        <Item text="learn React" />
        <Item text="make money" />
        <Item text="make money" > wwwwww</Item>
      </ol>
    );
  }
}

export default List;