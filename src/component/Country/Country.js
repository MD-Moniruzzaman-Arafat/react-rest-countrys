import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div>
            <p><b>Name : </b>{props.country.name.common}</p>
        </div>
    );
};

export default Country;