import React, { Component } from 'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  render() {
    const { title, author } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          name="Author"
          value={author}
        />
        <button type="button">Submit</button>
      </form>
    );
  }
}

export default AddBook;
