import { QueryPayload } from '@my-namespace/simple-shared-data';
import React, { Fragment } from 'react';


function ExamplePage() {
    return (
        <Fragment>
            <h1>Examples</h1>
            <button
            onClick={() => {
              fetch("http://localhost:3001/", {})
                .then((response) => response.json())
                .then((data: QueryPayload) => console.log(data.payload));
            }}
          >
            GET DATA
          </button>
        </Fragment>
    )
}

export default ExamplePage;