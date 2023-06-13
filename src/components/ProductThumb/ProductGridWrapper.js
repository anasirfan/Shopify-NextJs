import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import ProductGrid from "./ProductGrid";

const ProductGridWrapper = ({
  products,
  bottomSpace,
  column
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  
  
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          // const price = product.price || 0;
          // const discount = product.discount || 0;

          // const discountedPrice = getDiscountPrice(price, discount).toFixed(2);
          const productPrice = product.node.priceRange.minVariantPrice.amount;
          // const cartItem = cartItems.find(
          //   (cartItem) => cartItem.id === product.id
          // );
          // const wishlistItem = wishlistItems.find(
          //   (wishlistItem) => wishlistItem.id === product.id
          // );
          // const compareItem = compareItems.find(
          //   (compareItem) => compareItem.id === product.id
          // );

          return (
            <ProductGrid
              key={product.node.id}
              product={product}
              // discountedPrice={discountedPrice}
              productPrice={productPrice}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // compareItem={compareItem}
              bottomSpace={bottomSpace}
              column={column}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
