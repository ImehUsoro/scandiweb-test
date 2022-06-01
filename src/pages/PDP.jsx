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
import { Interweave } from "interweave";

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

  // Finds that adds items to selected items
  pushToSelected = () => {
    if (
      this.props.selectedProducts.find(
        (prod) =>
          prod.name === this.props.currentProduct.name &&
          prod.selectedSize === this.props.currentProduct.selectedSize
      )
    ) {
<<<<<<< HEAD
=======
      console.log("already in cart");
>>>>>>> 2e9e9b43ef0b819c034693c41b72bf40e5460d36
      this.props.setSelectedProducts((prev) =>
        prev.map((item) =>
          item.selectedSize === this.props.currentProduct.selectedSize
            ? { ...item, amount: item.amount + 1 }
            : { ...item }
        )
      );
    } else {
      this.props.setSelectedProducts((prev) => {
        return [...prev, this.props.currentProduct];
      });
    }
  };

  render() {
    const { id } = this.props.params;
    const {
      all,
      loading,
      selectedProducts,
      setSelectedProducts,
      currentProduct,
      setCurrentProduct,
    } = this.props;

    }
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
                    currentProduct={currentProduct}
                    setCurrentProduct={setCurrentProduct}
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
                    setCurrentProduct={setCurrentProduct}
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

                <AddToCartButton
                  product={product}
                  pushToSelected={this.pushToSelected}
                  noStock={!product.inStock}
                />
                {/* Product Description */}
                <Interweave
                  className="description"
                  content={product.description}
                ></Interweave>
              </div>
            </PDPstyle>
          ))}
      </>
    );
  }
}

export default withParams(PDP);
