import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Color from "../components/Color";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import Sizes from "../components/Sizes";
import { PDPstyle } from "../styles/PDPstyles";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";
import AddToCartButton from "../components/AddToCartButton";

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

  // Finds the item
  pushToSelected = () => {
    const product = this.props.all?.find(
      (item) => item.id === this.props.params.id
    );

    // Creates an object from found item
    const productDetails = {
      name: product.name,
      prices: product.prices,
      attributes: product.attributes,
      images: product.gallery,
      amount: 1,
      selectedSize: "",
      selectedColor: "",
    };

    this.props.setSelectedProducts((prev) => {
      return [...prev, productDetails];
    });
  };
  render() {
    const { id } = this.props.params;
    const { all, loading, selectedProducts, setSelectedProducts } = this.props;

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
                {product.attributes.find(
                  (attribute) => attribute.name === "Color"
                ) && (
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

                {/* Add to cart */}

                {selectedProducts?.find(
                  (item) => item.name === product.name
                ) ? (
                  <AddToCartButton selected />
                ) : (
                  <AddToCartButton
                    product={product}
                    pushToSelected={this.pushToSelected}
                    noStock={!product.inStock}
                  />
                )}
                {/* Product Description */}
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
