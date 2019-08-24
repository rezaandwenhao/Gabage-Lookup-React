import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';
import { keywordChanged, searchRequested } from '../actions/index';
import { FaSearch } from 'react-icons/fa';
import ResultItem from './ResultItem';

class SearchSec extends Component {
  search = (event) => {
    event.preventDefault();
    this.props.searchRequested();
  }

  render() {
    return (
      <div>
        <Form id="search">
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={event => this.props.keywordChanged(event.target.value)} />

          <Button type="submit" onClick={event => this.search(event)}>
            <FaSearch className="searchIcon" />
          </Button>
        </Form>

        <ResultItem />
      </div>
    );
  }
}

export default connect(null, { keywordChanged, searchRequested })(SearchSec);