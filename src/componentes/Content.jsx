import React from 'react';


const Part = ({name,excercises}) =>{

    console.log(name);
    console.log(excercises);

    return <li>{name} {excercises}</li>

}

const Content =({parts})=>{

    console.log(parts)

    return(
        <>
            <ul>
                {
                 parts.map( part => <Part key={part.id} name= {part.name} excercises= {part.exercises}/>)
                }
            </ul>
        </>
    )

}


export default Content;
