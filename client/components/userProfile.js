import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types'

function userProfile() {
  return (
    <div id="userProfile">userProfile
      <div id="profileContainer">
        <img src={`${imageUrl}`} height="400px" />
        <section id="colorContainer">
            <h1>firstName</h1>
            <h2>lastName</h2>
              <section id="userInfoContainer">
              <h3>Location: city, state</h3>
              </section>
              <p>Details: description?</p>
            <section id="priceColorContainer">
                <h3>Price: $ {price}</h3>
            </section>
          </section>
      </div>
    </div>
  )
}

// userProfile.propTypes = {}

export default userProfile
