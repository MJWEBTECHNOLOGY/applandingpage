import React from 'react'

function Download(props) {
    return (
        <div id='download'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                    at consequuntur tempore architecto totam velit voluptas nam. Adipisci labore, 
                    esse velit officia inventore non itaque deleniti explicabo dolore consectetur quam cum 
                    vel autem assumenda rem?
                </p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default Download