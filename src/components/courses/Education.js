import React from 'react';
import fakeData from '../../fakeData/fakeData';
import {useState} from 'react';
import '../courses/Education.css';
import Task from '../tasks/Task.js';
import Cart from '../cart/Cart';

const Education = () => {
    // console.log(fakeData);
    const latestCourses = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(latestCourses);
    const [cart, setCart] = useState([]);
    const cartHandler = (course) => {
        // console.log('course added', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    const headingStyle = {
        fontSize: '44px',
        margin: '30px auto',
        color: 'chocolate'

    }
    return (
       <div className="main-container row">
  <h3 style={headingStyle}>Number of courses : <strong>{courses.length}</strong></h3>
            <div className="col-md-10 course-container row">

                

               
                {
                    courses.map(course => <Task cartHandler={cartHandler}
                        course={course}></Task>  )
                }
            </div>
            <div className="col-md-2 cart-container">
                <Cart cart={cart}></Cart>
                
            </div>

       </div>
    );
};

export default Education;