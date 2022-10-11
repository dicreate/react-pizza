import React from 'react';
import classes from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={classes.root}>
            <span>:(</span>
            <br/>
            <h1>
                Not found anything :(
            </h1>
            <p className={classes.description}>Sorry, but this page not found</p>
        </div>
    );
};

export default NotFoundBlock;