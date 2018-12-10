import React, { Component } from 'react';

class Item extends Component {
  render() {
    // 上傳到下用props
    // this.props  屬性
    //this.props.children 用在jsx裡面
    return <li>{this.props.text}{this.props.children} {this.props.price+1}</li>
  }
}

export default Item;