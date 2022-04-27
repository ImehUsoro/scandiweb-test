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
    // console.log(id);
    // console.log(all);
    // console.log(all.filter((product) => product.id === id));

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
                <ProductName pdp product={product} />
                <Sizes pdp product={product} />
                <Color pdp product={product} />
                <ProductPrice pdp product={product} />
                <Link to={"/cart"}>
                  <button>ADD TO CART</button>
                </Link>
                <p className="description">
                  Fine stunning women's cocktail dress and party dresses. Stand
                  out in lace and metallic cocktail and party dresses from all
                  your favorite brands
                </p>
              </div>
            </PDPstyle>
          ))}
      </>
    );
  }
}

export default withParams(PDP);
