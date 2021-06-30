import React, { useState } from 'react'
import Header from '../componentes/Header';
import Content from '../componentes/Content';

const Course = ({course}) =>{

    const [courses,setCouses]= useState(course)

    console.log(courses)

    return(
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </>
    )


}


export default Course;