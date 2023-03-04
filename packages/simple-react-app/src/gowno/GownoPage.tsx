import React, { Fragment } from 'react';

function GownoPage() {
    return (
        <Fragment>
            <h1>Gowno</h1>
            <img src={require('./gowno.jpg')} alt="GOWNO"/>
        </Fragment>
    )
}

export default GownoPage;