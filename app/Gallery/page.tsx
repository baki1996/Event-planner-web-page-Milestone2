import React from "react";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <section className="Gallery">
      <div className="center-text">
        <h2> Our Exclusive Wedding Gallary</h2>
      </div>
      <div className="gallery-content">
        <div className="box">
          <Image
            src={"/img/wedding1.png"}
            alt="gellery img"
            height={2000}
            width={2000}
          />
          <h6>Catchy Environment</h6>
          <h4>SeaSide</h4>
        </div>

        <div className="box">
          <Image
            src={"/img/wedding2.png"}
            alt="gellery img"
            height={2000}
            width={2000}
          />
          <h6></h6>
          <h4></h4>
        </div>

        <div className="box">
          <Image
            src={"/img/wedding3.png"}
            alt="Gallery img"
            height={2000}
            width={2000}
          />
          <h6>Blissful</h6>
          <h4>Discover the magic of flawless events.</h4>
        </div>
        <div className="box">
          <Image
            src={"/img/wedding4.png"}
            alt="Gallery img"
            height={2000}
            width={2000}
          />
          <h6></h6>
          <h4></h4>
        </div>
        <div className="box">
          <Image
            src={"/img/wedding5.png"}
            alt="gellery img"
            height={2000}
            width={2000}
          />
          <h6></h6>
          <h4></h4>
        </div>
      </div>
      <div className="center-btn">
        <div className="btn">
          <Link className="btn-link" href={""}>
            See Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
