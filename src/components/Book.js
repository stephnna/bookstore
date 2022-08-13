import React, { Component } from 'react';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'First Book',
      author: 'Stephen Ezea',
    };
  }

  render() {
    const { title, author } = this.state;
    return (
      <li>
        <span>{title}</span>
        <br />
        <span>{author}</span>
        <br />
        <button type="button">Remove</button>
      </li>
    );
  }
}
export default Books;
