import React, { Component } from "react";
import MenuItem from "./menu-item";
import "./dirctory.style.scss";
import HatImage from "../../imgs/hat.jpg";
import JacketImg from "../../imgs/jackets.jpg";
import SneakerImg from "../../imgs/sneakers.jpg";
import MenImg from "../../imgs/men.jpg";
import WomenImg from "../../imgs/women.jpg";
class Dirctory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "hats",
          img: HatImage,
          id: 1,
        },
        {
          title: "sneakers",
          img: JacketImg,
          id: 2,
        },
        {
          title: "jackets",
          img: SneakerImg,
          id: 3,
        },
        {
          title: "man",
          img: MenImg,
          size: "large",
          id: 4,
        },
        {
          title: "women",
          img: WomenImg,
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.menu.map(({ title, img, id, size }) => (
          <MenuItem title={title} key={id} img={img} size={size} />
        ))}
      </>
    );
  }
}

export default Dirctory;
