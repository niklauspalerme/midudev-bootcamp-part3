import React from 'react';

const Content =({parts})=>{

    return(
        <>
            <ul>
                {
                    parts.map( part => <li key={part.id}>{part.name} {part.excersises}</li>)
                }
            </ul>
        </>
    )

}


export default Content;