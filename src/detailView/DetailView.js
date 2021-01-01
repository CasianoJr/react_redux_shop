import React from "react";
import { connect } from "react-redux";

function DetailView() {
  return <div>Detail</div>;
}

const mapToStateToProps = (state) => {
  return {
    product: state.shop.currentItem,
  };
};

export default connect(mapToStateToProps)(DetailView);
