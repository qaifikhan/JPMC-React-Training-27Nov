import React from 'react';

const ProgressLoader = (props) => {
    return(
        <div>
            {
                props.isLoading ? 
                <h1>Loading Data...</h1>
                :
                props.children
            }
        </div>
    );
}

export default ProgressLoader;