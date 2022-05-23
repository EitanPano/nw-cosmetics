import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        navigateTo: '/product',
        faIcon: <i className="fa-solid fa-gifts"></i>,
        title: 'Our Products',
    },
    {
        navigateTo: '/treatment',
        faIcon: <i className="fa-solid fa-stethoscope"></i>,
        title: 'Our Treatments',
    },
    {
        navigateTo: '/article',
        faIcon: <i className="fa-solid fa-heart-pulse"></i>,
        title: 'Healthy Lifestyle',
    },
    {
        navigateTo: '/contact',
        faIcon: <i className="fa-solid fa-headset"></i>,
        title: 'Contact Us',
    },
];

export const HomeServices = () => {
    const navigate = useNavigate();

    return (
        <nav className="our-services">
            <Row className='py-3'>
            {services.map((service, idx) => {
                return (
                    <Col md={3} xs={6} key={idx}>
                        <article onClick={()=>navigate(service.navigateTo)} className="service">
                            <div className="circle-glass mt-3 mb-4">
                                {service.faIcon}
                            </div>
                            <h5>{service.title}</h5>
                        </article>
                    </Col>
                );
            })}
            </Row>
        </nav>
    );
};
