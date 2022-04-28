import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Color from "../components/Color";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import Sizes from "../components/Sizes";
import { PDPstyle } from "../styles/PDPstyles";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
export class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  render() {
    const { id } = this.props.params;
    const { all, loading } = this.props;

    if (loading) {
      return <h1>Loading..</h1>;
    }
    return (
      <>
        {all
          ?.filter((item) => item.id === id)
          .map((product) => (
            <PDPstyle key={product.id}>
              {/* First */}
              <div className="product-display">
                {product.gallery.map((image, id) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    onClick={() => this.setState({ id })}
                  />
                ))}
              </div>
              {/* Second */}
              <div className="product-image">
                <img src={product.gallery[this.state.id]} alt="" />
              </div>
              {/* Third */}
              <div className="product-info">
                {/* Product Name */}
                <ProductName pdp product={product} />
                {/* Product Size */}
                {product.attributes.length > 0 && (
                  <Sizes pdp product={product} />
                )}
                {/* Product Color */}
                {product.attributes.filter(
                  (attribute) => attribute.name === "Color"
                ).length > 0 && <Color pdp product={product} />}
                {/* Product Product Price */}
                <ProductPrice pdp product={product} />
                <Link to={"/cart"}>
                  <button disabled={!product.inStock}>ADD TO CART</button>
                </Link>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></p>
              </div>
            </PDPstyle>
          ))}
      </>
    );
  }
}

export default withParams(PDP);
