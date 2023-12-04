import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <>
      <section className="flex_space pt-5">
        <div className="container-fluid">
          <video width="100%" height="100%" loop autoPlay muted controls>
            <source
              src="https://kasutam.com/assets/full-screen.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default Video;
