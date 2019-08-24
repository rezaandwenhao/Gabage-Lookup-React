import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { toggleFavorite } from '../actions/index';
import { FaStar } from 'react-icons/fa';

class Footer extends Component {
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
            <div className="footer">
                <h2 id="Favourites_text">Favourites</h2>
                {
                    this.state.favoriateItems ?
                        this.state.favoriateItems.map((item, index) => (
                                <Row className="item" key={index}>
                                    <Col className="item-title" md={6}>
                                        {
                                            <FaStar onClick={() => this.props.toggleFavorite(item)} />
                                        }
                                        {' ' + item.title}
                                    </Col>
                                    <Col className="item-detail" md={6} dangerouslySetInnerHTML={{ __html: this.htmlDecode(item.body) }} />
                                </Row>
                        )) :
                        <div></div>
                }
            </div>
        );
    }
}

// this gives this class access to the state in the reducer
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { toggleFavorite })(Footer);