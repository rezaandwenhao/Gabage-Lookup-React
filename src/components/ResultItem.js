import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { toggleFavorite } from '../actions';

class ResultItem extends Component {
    componentWillMount() {
        this.setState({ favoriateItems: this.props.favReducer.favoriate_results })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.favoriateItems !== nextProps.favReducer.favoriate_results) {
            this.setState({ favoriateItems: nextProps.favReducer.favoriate_results })
        }
    }

    htmlDecode = (text) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = text.replace(/\//g, "/");
        return txt.value;
    }

    render() {
        return (
            <div className="allItems">
                {
                    this.props.searchReducer.results ?
                        this.props.searchReducer.results.map((item, index) => (
                            <Row className="item" key={index}>
                                <Col className="item-title" md={6}>
                                    {
                                        // Compatible way to check if array includes an object
                                        // otherwise could use .some(e => e.Name === 'Magenic') which returns boo directly
                                        this.state.favoriateItems.filter(function(i) {
                                            return i.title === item.title
                                        }).length > 0 ?
                                            <FaStar onClick={() => this.props.toggleFavorite(item)} /> :
                                            <FaRegStar onClick={() => this.props.toggleFavorite(item)} />
                                    }
                                    {' ' + item.title}
                                </Col>
                                <Col className="item-detail" md={6} dangerouslySetInnerHTML={{ __html: this.htmlDecode(item.body) }} />
                            </Row>
                        )) : <Row></Row>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { toggleFavorite })(ResultItem);