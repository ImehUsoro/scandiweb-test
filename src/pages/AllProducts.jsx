import React, { Component } from "react";
import { ProductCardStyle, StyledLink } from "../styles/ProductCardStyles";
import cart from "../images/icon.svg";
import { useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";

function withCurrency(Component) {
  return (props) => (
    <Component {...props} currency={useRecoilValue(currencyState)} />
  );
}

export class AllProducts extends Component {
  render() {
    const { all, loading, pushItemToCart } = this.props;

    return (
      <>
        {all?.products.map((product) => (
          <ProductCardStyle key={product.id}>
            <div className={!product.inStock ? "no-stock" : ""}>
              <div>
                <img
                  className="icon"
                  src={cart}
                  alt=""
                  onClick={() => pushItemToCart(product)}
                />
              </div>
              {!product.inStock && <p className="out-of-stock">OUT OF STOCK</p>}
              <StyledLink to={`/product/${product.id}`}>
                <div className="product-image">
                  <img src={product.gallery[0]} alt={product.name} />
                </div>
              </StyledLink>
              <StyledLink to={`/product/${product.id}`}>
                <p className="product-name">
                  {product.brand} {product.name}
                </p>
                {product.prices
                  .filter(
                    (item) => item.currency.symbol === this.props.currency
                  )
                  .map((value) => (
                    <p key={value.amount} className="price">
                      {this.props.currency}
                      {value.amount}
                    </p>
                  ))}
              </StyledLink>
            </div>
          </ProductCardStyle>
        ))}
      </>
    );
  }
}

export default withCurrency(AllProducts);
