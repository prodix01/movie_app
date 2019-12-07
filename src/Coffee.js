import React from "react";
import PropTypes from "prop-types";


function Coffee({ favorite, name, rating }) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>{rating} / 5.0</h4>
            <img src={favorite} alt={name} />
        </div>
    );

}


Coffee.propTypes = {
    name : PropTypes.string.isRequired,
    favorite : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
};



export default Coffee;