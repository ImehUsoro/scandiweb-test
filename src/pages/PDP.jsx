import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Color from "../components/Color";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import Sizes from "../components/Sizes";
import { PDPstyle } from "../styles/PDPstyles";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";

function withParams(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
      currency={useRecoilValue(currencyState)}
    />
  );
}
export class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  // Function that creates an object for the selected item
  pushToSelected = () => {
    const product = this.props.all?.filter(
      (item) => item.id === this.props.params.id
    );

    const productDetails = {
      name: product[0].name,
      prices: product[0].prices,
      color: "",
      size: "",
      images: product[0].gallery,
      amount: 1,
    };

    // console.log(productDetails);
    this.props.setSelectedProducts((prev) => {
      // prev.forEach((product) => console.log(product.name));
      // console.log(prev.filter((product) => prev.name === productDetails.name));
      return [...prev, productDetails];
    });
    // return productDetails;
  };
  render() {
    const { id } = this.props.params;
    const { all, loading, selectedProducts, setSelectedProducts } = this.props;

    // console.log(selectedProducts);

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
                <ProductName
                  pdp
                  product={product}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                />
                {/* Product Size */}
                {product.attributes.length > 0 && (
                  <Sizes
                    pdp
                    product={product}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                )}
                {/* Product Color */}
                {product.attributes.filter(
                  (attribute) => attribute.name === "Color"
                ).length > 0 && (
                  <Color
                    pdp
                    product={product}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                )}
                {/* Product Product Price */}
                <ProductPrice
                  pdp
                  product={product}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                />
                <Link to={"/cart"}>
                  <button
                    onClick={this.pushToSelected}
                    disabled={!product.inStock}
                  >
                    ADD TO CART
                  </button>
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
