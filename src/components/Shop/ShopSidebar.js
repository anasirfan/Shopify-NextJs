import { Fragment } from "react";
import { IoIosSearch } from "react-icons/io";
import {
  getIndividualCategories,
  getIndividualColors,
  getIndividualTags,
  setActiveSort,
  getProducts,
  getDiscountPrice
} from "../../lib/product";
import { ProductRating } from "../Product";
import Anchor from "../anchor";

const ShopSidebar = ({ products,  popularProducts ,fetchedCategories }) => {

  const categories = fetchedCategories;
  // const colors = getIndividualColors(products);
  // const tags = getIndividualTags(products);
  // console.log(popularProducts)
 
  // const popularProducts = getProducts(products, "decor", "popular", 3);

  return (
    <div className="shop-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        {/* search widget */}
        <div className="search-widget">
          <form>
            <input type="search" placeholder="Search products ..." />
            <button type="button">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      {/* category list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Categories
        </h2>
        {categories.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("category", "");
                  setActiveSort(e);
                }}
                className="active"
              >
                All categories
              </button>
            </li>
            {categories.map((category, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("category", category);
                      setActiveSort(e);
                    }}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      {/* color list */}
      {/* <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">Colors</h2>
        {colors.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--color">
            {colors.map((color, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("color", color.colorName);
                      setActiveSort(e);
                    }}
                    style={{ backgroundColor: color.colorCode }}
                  ></button>
                </li>
              );
            })}
            <li>
              <button
                onClick={(e) => {
                  getSortParams("color", "");
                  setActiveSort(e);
                }}
              >
                x
              </button>
            </li>
          </ul>
        ) : (
          "No colors found"
        )}
      </div> */}

      {/* popular products */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Popular products
        </h2>
        {popularProducts.length > 0 ? (
          <div className="widget-product-wrapper">
            {popularProducts.map((product, i) => {
              // const discountedPrice = getDiscountPrice(
              //   product.price,
              //   product.discount
              // );
              // console.log(product)
              // const productPrice = product.data.node.variants.edges[0].node.price.amount;
              const productPrice = product.node.priceRange.minVariantPrice.amount;
              return (
                <div className="single-widget-product-wrapper" key={i}>
                  <div className="single-widget-product">
                    <div className="single-widget-product__image">
                      <Anchor
                        path={`/shop/product-basic/${product.node.handle}`}
                        className="image-wrap"
                      >
                          <img
                            src={product.node.images.edges[0].node.originalSrc}
                            className="img-fluid"
                            alt={product.name}
                          />
                      </Anchor>
                    </div>
                    <div className="single-widget-product__content">
                      <div className="single-widget-product__content__top">
                        <h3 className="product-title space-mb--10">
                          <Anchor
                            path={`/shop/product-basic/${product.node.handle}`}
                          >
                            {product.node.title}
                          </Anchor>
                        </h3>
                        <div className="price space-mb--10">
                          {
                          // product.discount > 0 ? (
                          //   <Fragment>
                          //     <span className="main-price discounted">
                          //       ${productPrice}
                          //     </span>
                          //     <span className="discounted-price">
                          //       ${discountedPrice}
                          //     </span>
                          //   </Fragment>
                          // ) : (
                            <span className="main-price">${productPrice}</span>
                          }
                        </div>
                        {/* <div className="rating">
                          <ProductRating ratingValue={product.rating} />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "No products found"
        )}
      </div>

      {/* tag list */}
      {/* <div className="single-sidebar-widget">
        <h2 className="single-sidebar-widget__title space-mb--30">Tags</h2>
        {1 > 0 ? (
          <div className="tag-container">
            <td className="value">
                    {product.data.productByHandle.tags &&
                    product.data.productByHandle.tags.map((item, index, arr) => {
                        return (
                          <Anchor path="/shop/left-sidebar" key={index}>
                              {item + (index !== arr.length - 1 ? ", " : "")}
                          </Anchor>
                        );
                      })}
                  </td>
          </div>
        ) : (
          "No tags found"
        )}
      </div> */}
    </div>
  );
};

export default ShopSidebar;
