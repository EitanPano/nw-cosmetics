import React from 'react';
import { Col, Row } from 'react-bootstrap';

import PropTypes from 'prop-types'

export const Rating = ({ avg, total }) => {
    const ratingArr = [1, 2, 3, 4, 5];

    const Stars = () => ratingArr.map((num, idx) => (
            <span className='text-warning' key={idx}>
            <i className = {
                    avg >= num
                        ? 'fas fa-star'
                        : avg >= num - 0.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star' }>
            </i>
        </span>
    ));

    return (
        <>
            <Row>
                <Col>
                    <Stars></Stars>
                </Col>
            </Row>
            {total} Reviews
        </>
    )
};

Rating.propTypes = {
    avg: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}
