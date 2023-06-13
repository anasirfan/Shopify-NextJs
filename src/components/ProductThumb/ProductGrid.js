import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch, ImWhatsapp, IoLogoWhatsapp } from "react-icons/io";
import { Tooltip } from "react-tippy";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "../../store/slices/compare-slice";
import ProductModal from "./ProductModal";
import Anchor from "../anchor";

const ProductGrid = ({
  product,
  // discountedPrice,
  productPrice,
  // cartItem,
  // wishlistItem,
  // compareItem,
  bottomSpace,
  column
}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const imageUrl = product.node.images.edges[0].node.originalSrc;

  return (
    <Fragment>
      <Col
        lg={column && column === 4 ? 3 : 4}
        md={6}
        className={clsx(bottomSpace)}
      >
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
          <Anchor path={`/shop/product-basic/${product.node.handle}`} className="image-wrap">
 
    <img
      src={imageUrl}
      className="img-fluid"
      alt={product.node.title}
    />
  
</Anchor>

            <div className="product-grid__floating-badges">
              {/* {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )} */}
              {product.new ? <span className="hot">New</span> : ""}
              {product === 0 ? (
                <span className="out-of-stock">out</span>
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__floating-icons">
              {/* add to wishlist */}
              <Tooltip
                title={
                  product !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  // onClick={
                  //   wishlistItem !== undefined
                  //     ? () => dispatch(deleteFromWishlist(product.id))
                  //     : () => dispatch(addToWishlist(product))
                  // }
                  // className={wishlistItem !== undefined ? "active" : ""}
                >
                  <IoIosHeartEmpty />
                </button>
              </Tooltip>

              {/* add to Whatsapp */}
              <Tooltip
                title={
                  product !== undefined
                    ? "Added to WhatsApp"
                    : "Add to WhatsApp"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  // onClick={
                  //   compareItem !== undefined
                  //     ? () => dispatch(deleteFromCompare(product.id))
                  //     : () => dispatch(addToCompare(product))
                  // }
                  // className={compareItem !== undefined ? "active" : ""}
                >
                  <IoLogoWhatsapp />
                </button>
              </Tooltip>

              {/* quick view */}
              <Tooltip
                title="Quick view"
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <IoIosSearch />
                </button>
              </Tooltip>
            </div>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Anchor path={`/shop/product-basic/${product.node.handle}`}>
                  {product.name}
                </Anchor>
              </h3>
              {/* add to cart */}
              {product.affiliateLink ? (
                <a href={product.affiliateLink} target="_blank">
                  Buy now
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Anchor path={`/shop/product-basic/${product.node.handle}`}>
                  Select Option
                </Anchor>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                >
                  {cartItem !== undefined ? "Added to cart" : "Add to cart"}
                </button>
              ) : (
                <button disabled>Out of Stock</button>
              )}
            </div>
            <div className="price">
              {0 > 0 ? (
                <Fragment>
                  <span className="main-price discounted">${productPrice}</span>
                  {/* <span className="discounted-price">${discountedPrice}</span> */}
                </Fragment>
              ) : (
                <span className="main-price">${productPrice}</span>
              )}
              <span className="main-price">{product.node.title}</span>
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        // discountedprice={discountedPrice}
        productprice={productPrice}
        // cartitem={cartItem}
        // wishlistitem={wishlistItem}
        // compareitem={compareItem}
      />
    </Fragment>
  );
};

export default ProductGrid;
