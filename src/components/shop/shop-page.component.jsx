import React, { Component } from "react";
import PreviewCollection from "./collection/preview-collection";
import SHOP_DATA from "./collection/collection-data";
class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...items }) => (
          <PreviewCollection key={id} {...items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
