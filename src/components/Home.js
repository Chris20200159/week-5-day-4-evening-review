import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      boot_image: "",
      description: "",
      price: 0.0
    };
  }
  //this function adds a pair of boots to our database, capturing the three properties off of state and putting them onto the req.body object in the axios request
  addBoot = () => {
    const { boot_image, description, price } = this.state;
    axios.post("/api/boots", { boot_image, description, price }).then(() => {
        //clearing out our inputs upon successful submission
      this.setState({
        boot_image: "",
        description: "",
        price: 0.0
      });
      //user experience, go to display of all the boots after a successful submission of a new pair
      this.props.history.push("/main");
    });
  };

//universal handle changer can be used for all three inputs
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // console.log("HOME PROPS", this.props);
    return (
      <div className="home">
        <div>
          <input
            onChange={(e) => this.handleChange(e)}
            name="boot_image"
            placeholder="...boot image here"
            value={this.state.boot_image}
            type="text"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            name="description"
            placeholder="...description"
            value={this.state.description}
            type="text"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            name="price"
            placeholder="...price"
            value={this.state.price}
            type="text"
          />
        </div>
        <div>
          <button onClick={this.addBoot}>Add New Boot</button>
        </div>
      </div>
    );
  }
}
