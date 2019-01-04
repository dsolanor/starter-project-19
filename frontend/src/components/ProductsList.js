import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts = () => {
    return this.props.products.map(item => {
      return <li key={item.id}>{item.name}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>{this.renderProducts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
