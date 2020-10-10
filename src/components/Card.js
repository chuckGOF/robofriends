import React from 'react';
// import './Card.css'

const Card = ({id, name, email}) => {
    // const {id, name, email} = props
    return (
        <div className="bg-light-green dib ma2 pa3 br3 bw2 shadow-5 grow">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <h2>{email}</h2>
                {/* <h2>{props.name}</h2>
                <h2>{props.email}</h2> */}
            </div>
        </div>
    );
}

export default Card;