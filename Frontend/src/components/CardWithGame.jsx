import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardWithGame  = ({ title, description, imgUrl ,linkUrl}) => {
    return (
       
      <Col size={12} sm={6} md={4}>
            
            <a  href= {linkUrl}  target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        </a> 
      </Col>
     
    )
}

export default CardWithGame