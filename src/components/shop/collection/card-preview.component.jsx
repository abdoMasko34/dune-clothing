import React from "react";
import "./card-preview.style.scss";
import CustomButton from "../../UI/custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cart-actions";

// const  = () => {
//   return (  );
// }

// export default ;

const CardPreview = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (cart) => dispatch(addItem(cart)),
});

export default connect(null, mapDispatchToProps)(CardPreview);
