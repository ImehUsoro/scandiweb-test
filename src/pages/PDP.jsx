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
    this.props.setSelectedProducts((prev) => {
      if (
        this.props.selectedProducts.find(
          (prod) =>
            prod.name === this.props.currentProduct.name &&
            prod.selectedSize === this.props.currentProduct.selectedSize
        )
      ) {
        prev
          .filter(
            (prod) =>
              prod.name === this.props.currentProduct.name &&
              prod.selectedSize === this.props.currentProduct.selectedSize
          )[0]
          .map((item) =>
            item.name === this.props.currentProduct.name &&
            item.selectedSize === this.props.currentProduct.selectedSize
              ? [...prev, { ...item, amount: item.amount++ }]
              : null
          );
      } else {
        return [...prev, this.props.currentProduct];
      }
    });
  };

  // option 2

  // this.props.setSelectedProducts((prev) => {
  //   if (
  // this.props.selectedProducts.find(
  //   (prod) =>
  //     prod.name === this.props.currentProduct.name &&
  //     prod.selectedSize === this.props.currentProduct.selectedSize
  //     )
  //   ) {
  //     prev.map((prod) => {
  //       if (
  //         prod.name === this.props.currentProduct.name &&
  //         prod.selectedSize === this.props.currentProduct.selectedSize
  //       ) {
  //         return [...prev, { ...prod, amount: prod.amount++ }];
  //       }
  //       return [...prev];
  //     });
  //   } else {
  //     return [...prev, this.props.currentProduct];
  //   }
  // });

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

    console.log(currentProduct);
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

// pushToSelected = () => {
//   this.props.setSelectedProducts((prev) => {
//     if (
//       this.props.selectedProducts.find(
//         (prod) =>
//           prod.name === this.props.currentProduct.name &&
//           prod.selectedSize === this.props.currentProduct.selectedSize
//       )
//     ) {
//       prev.map((prod) =>
//         prod.name === this.props.currentProduct.name &&
//         prod.selectedSize === this.props.currentProduct.selectedSize
//           ? { ...prod, selectedColor: prod.selectedSize++ }
//           : null
//       );
//     } else {
//       return [...prev, this.props.currentProduct];
//     }
//   });
// };
