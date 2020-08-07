import React from "react";
import axios from "axios";

//simple display of a single boot

export default class Boot extends React.Component {
  constructor() {
    super();
    this.state = {
      boot: {},
    };
  }
  //this function takes the id off of the match.params object on props and sends that to the server on the params object for the database call
  getBoot = (id) => {
    axios.get(`/api/single/boot/${id}`).then((res) => {
      this.setState({
        boot: res.data[0],
      });
    });
  };
  componentDidMount() {
    this.getBoot(this.props.match.params.id);
  }
  render() {
    // console.log("PROPS", this.props);
    // console.log("BOOT", this.state.boot);

    const{boot_image, description, price} = this.state.boot
    return (
      <div>
        <img className="boot-image" src={boot_image} alt="Boots" />
        <p>{description}</p>
        <h3>${price}</h3>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    );
  }
}
