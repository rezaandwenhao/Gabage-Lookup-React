import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { keywordChanged, searchRequested } from '../actions/index';

class SearchSec extends Component {

    render() {
        return (
            <div>
                {this.props.searchReducer.results ? 
                this.props.searchReducer.results.map((item, index) => (
                    <Row className="item" key={index}>
                        <Col className="item-title">
                            {
                                // <Glyphicon
                                //     glyph="glyphicon glyphicon-star"
                                //     style={{ color: '#A9A9A9', fontSize: 17 }} />
                            }
                            {' ' + item.title}
                        </Col>
                        <Col className="item-detail">
                            {item.body}
                        </Col>
                    </Row>
                )) : <Row></Row>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { keywordChanged, searchRequested })(SearchSec);