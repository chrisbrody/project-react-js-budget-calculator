import React from 'react'

// require a type and text when calling Alert to dynamically change class and text
const Alert = ({type, text}) => {
    return (

        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}

export default Alert
