import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-content">
        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/feature1.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Ideal Dinner Setup</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/feature.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Fine Art Photography</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/feature2.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Exploring Themes</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/feature4.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Customized Stage</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/feature3.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Decor Ideas</h4>
        </div>


      </div>
    </section>
  );
};

export default Feature;
