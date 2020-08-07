import React from "react";
import './Boot.css'
import {withRouter} from 'react-router-dom'


//Simple display of our boots

const Boots = (props) => {
  const { boot_image, description, price, id } = props.data;
//   console.log("BOOTS PROPS", props)
  return (
    <div className='boot' onClick={() => props.history.push(`/boot/${id}`)}>
      <img className='boot-image' src={boot_image} alt="Boots" />
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default withRouter(Boots);
