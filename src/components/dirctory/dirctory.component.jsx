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
          title: "HATS",
          img: HatImage,
          id: 1,
        },
        {
          title: "SNAKERS",
          img: JacketImg,
          id: 2,
        },
        {
          title: "JACKETS",
          img: SneakerImg,
          id: 3,
        },
        {
          title: "MAN",
          img: MenImg,
          size: "large",
          id: 4,
        },
        {
          title: "WOMEN",
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
