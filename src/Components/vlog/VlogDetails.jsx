import React from "react";
import "./Vlog.css";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Review from "../HomeSection/review/Review";
import { useSingleBlogContext } from "../../context/singleBlogContext";
import { useEffect } from "react";
import {useParams} from "react-router-dom"

const API ="http://localhost:8001/blog"


const VlogDetails = () => {
  const { id } = useParams();

  const { getSingleBlog, singleBlog } =
    useSingleBlogContext();
  const {
    title,
    cover,
    desc,
  } = singleBlog;


  useEffect(() => {
    getSingleBlog(`${API}/${id}`);
  }, []);

  return (
    <>
   
      <section className="vlog mb-5">
        <div className="container">
          <div className="heading">
            <h1>{title}</h1>
            <div className="line"></div>
          </div>
          <div className="vlog_details">
            <figure>
              <img
                src={cover}
                alt={title}
                className="img-fluid"
              />
            </figure>
          </div>

          <div className="vlog_admin_section">
            <hr />
            <div className="vlog_admin_icon">
              <p>
                <FaUser className="icon_vlog" />
              </p>
              <p className="mx-2">User</p>
              <p className="mx-2">
                <SlCalender className="icon_vlog" />
              </p>
              <p>2022-05-31 04:24:08</p>
            </div>
            <h5>{title}</h5>
            <div>
              <p style={{ textAlign: "justify" }}>
              {desc}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Review />
    </>
  );
};

export default VlogDetails;
