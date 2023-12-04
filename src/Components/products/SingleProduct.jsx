import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Common/spinner/Loading";
import Ratings from "../ratings/Ratings";
import Descriptions from "./Descriptions";
import ProductsShortsImages from "./ProductsShortsImages";
import MyImages from "./MyImages";
import { useSingleProductContext } from "../../context/singleProductContext";
import AddToCart from "../cart/AddToCart";

const API = "http://localhost:8000/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProducts, singleProduct, isSingleLoading } =
    useSingleProductContext();

  const {
    id: alis,
    name,
    price,
    delPrice,
    discount,
    desc,
    reviews,
    image,
    videos,
    stars,
    stock,
    discountTitle,
  } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
  }, []);
  return (
    <>
      {isSingleLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <section className="mtop flex_space mb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-6 col-12">
                  <div className="disTitle">
                    <p>{discountTitle}</p>
                  </div>

                  <MyImages img={image} />
                </div>
                <div className="col-lg-6 col-12">
                  <div className="product_details_data">
                    <h3>{name}</h3>
                    <div>
                      <div className="product_price">
                        <div className="productMainPrice">
                          <h4>₹ {price}</h4>
                          <p>
                            <del>₹ {delPrice}</del>
                          </p>
                          <p>{discount}</p>
                        </div>
                        <div>
                          <Ratings reviews={reviews} stars={stars} />
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div className="choose">
                      <p>You can choose other options</p>
                    </div>
                    <hr />
                    <div className="details_short_img">
                      <ProductsShortsImages />
                    </div>
                    <hr />
                    <AddToCart cartData={singleProduct} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Descriptions desc={desc} videos={videos} />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
