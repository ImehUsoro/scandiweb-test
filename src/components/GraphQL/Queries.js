import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    categories {
      name
      products {
        name
      }
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        brand
        gallery
        inStock
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const TECH_PRODUCTS = gql`
  {
    category(input: { title: "tech" }) {
      products {
        id
        name
        brand
        gallery
        inStock
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

export const CLOTHES_PRODUCTS = gql`
  {
    category(input: { title: "clothes" }) {
      products {
        id
        name
        brand
        gallery
        inStock
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;
