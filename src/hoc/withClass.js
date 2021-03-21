import React from 'react'

const withClass = (Component, className) => {

    return props => {
        //console.log({...props});
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }

}

export default withClass