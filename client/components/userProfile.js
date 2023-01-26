import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types'



function userProfile() {
  return (
    <div id="userProfile">userProfile
       {/* <div id="single-product-info" style={singleProductStyle}>
                {singleUser.isAdmin ? (
                    <EditProductForm />
                ) : ( */}
          <div id="profileContainer">
            <img src={`${imageUrl}`} height="400px" />
            <section id="detailsContainer">
                <h1>firstName</h1>
                <h2>lastName</h2>
                  <section id="userInfoContainer">
                    <h3>Location: city, state</h3>
                  </section>
                  <p>Details: description?</p>
                <form id="messageFriend">Message</form> 
                <button id="addFriend">Add Friend</button>
                <h2 id="rating">Rating: {rating} </h2>
              </section>
              <section id="statusContainer">
                  <input id="statusPhoto">{imageAttachment}</input>
                  <input id="statusText">Status: "Saved a puppy today! #PETA #Saint #GoingtoHeaven"</input>
              </section>
          </div>
          {/* )}
        </div> */}
    </div>
  )
}

// userProfile.propTypes = {}

export default userProfile
