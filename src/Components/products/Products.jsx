import React from "react";
import "./Products.css";
import { useProductContext } from "../../context/productsContext";
import Loadings from "../../Common/spinner/Loading";
import ProductsCards from "./ProductsCards";

const Products = () => {
  const { isLoading, products } = useProductContext();
  return (
    <>
      {isLoading ? (
        <div>
          <Loadings />
        </div>
      ) : (
        <div>
          <section className="popular ">
            <div className="full_container">
              <div className="heading">
                <h1>ALL PRODUCTS</h1>
                <div className="line"></div>
              </div>

              <div className="content">
                <div className="row w-100">
                  {products.map((curElem) => {
                    return <ProductsCards key={curElem.id} {...curElem} />;
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Products;
