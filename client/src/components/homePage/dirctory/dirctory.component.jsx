import React from "react";
import CollectionItem from "./collection-item";
import "./dirctory.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../../redux/dirctory/dirctory-selector";
// import
const Dirctory = ({ sections }) => (
  <>
    {sections.map(({ id, ...section }) => (
      <CollectionItem key={id} {...section} />
    ))}
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Dirctory);
