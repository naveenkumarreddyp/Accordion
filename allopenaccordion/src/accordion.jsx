import React, { useState } from 'react';

const Accordion = ({question, answer})=>{
    const [opened, setOpened] = useState(false)

    return (
        <div className="item">
            <div className="question" onClick={()=> setOpened(!opened)}>
                <h3>{question}</h3>
                <span>{opened ? '˄' : '˅'}</span>
            </div>
            {opened && <p>{answer}</p>}
        </div>
    )
}

export default Accordion