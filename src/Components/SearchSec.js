import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class SearchSec extends Component {
  render() {
    return (
      <Form>
        <FormControl type="text" placeholder="Search for the item to dispose..." onChange={event => this.setState({ keyword: event.target.value })}/>

        <Button type="submit" bsStyle="success" onClick={(e) => this.search(e)}>
        </Button>
      </Form>
    );
  }
}

export default SearchSec;