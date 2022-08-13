import React from 'react';
import {Container, Row, Col, List, ListGroupItem, ListGroup} from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
      <Container>
            <Row>
                <Col lg="3" md="4" sm="6">
                    <div className='logo footer__logo text-start'>
                        <img className='footer-logo-img' src={logo} alt="logo" ></img>
                        <h5>Tasty Treat</h5>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="6" >
                    <h4 className='delivery__title'>Delivery Time</h4>
                    <ListGroup >
                        <ListGroupItem className='delivery-time border-0 ps-0'>
                            <span>Sunday - Thrusday</span>
                            <p>10:00am - 11:00pm</p>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className='delivery-time border-0 ps-0'>
                            <span>Friday - Saturday</span>
                            <p>Off Day</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6" >
                    <h4 className='delivery__title'>Contact</h4>
                    <ListGroup >
                        <ListGroupItem className='delivery-time border-0 ps-0'>
                            <p>Location: ****</p>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup >
                        <ListGroupItem className='delivery-time border-0 ps-0'>
                            <span>Phone: 1234567890</span>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className='delivery-time border-0 ps-0'>
                            <span>Email: example@gmail.com</span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container> 
      </footer>
    </div>
  )
}

export default Footer