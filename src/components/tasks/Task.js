import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Task.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {
    // console.log(props.course);
    const {courseName, trainer, courseDuration, cost, courseContent }= props.course;
    const healines = {
        color:'chocolate'
    }
    const courseStyle = {
        color:'blue'
    }
    return (
        <div className="task-content">
          <Card style={{ width: '18rem', margin: '2px' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                 <Card.Title> <h2>Course Title <br/> <strong style={healines}>{courseName}</strong></h2></Card.Title>
                    <Card.Text>
                         <p> Course Trainer : <strong style={healines}>{trainer}</strong></p>
                         <p>Course Duration : <strong style={healines}>{courseDuration}</strong></p>
                         <p>Course Cost : <strong style={healines}>{cost}</strong></p>
                         <p>Course Content : <strong style={courseStyle}>{courseContent}</strong></p>
                    </Card.Text>
                    <Button onClick={() => props.cartHandler(props.course)} variant="primary"><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
   
};

export default Task;