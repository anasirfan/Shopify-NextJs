import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridList from "./ProductGridList";
import { getDiscountPrice } from "../../lib/product";

const ProductGridWrapper = ({
  products,
  bottomSpace,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <Fragment>
      {products &&
        products.map((product) => {
          // const discountedPrice = getDiscountPrice(
          //   product.price,
          //   product.discount
          // );
          console.log(products)
          const productPrice = product.node.priceRange.minVariantPrice.amount;
          // console.log(productPrice)
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
            <ProductGridList
              key={product.node.id}
              product={product}
              // discountedPrice={discountedPrice}
              productPrice={productPrice}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // compareItem={compareItem}
              bottomSpace={bottomSpace}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
