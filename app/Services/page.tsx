import React from "react";
import Image from "next/image";
import Link from "next/link";


const Services = () => {
  return (
    <section className="Services">
      <div className="Services-img">
        <Image
          src={"/img/services.png"}
          alt="Services img"
          width={2000}
          height={2000}
        />
      </div>
      <div className="Services-text">
        <h5>Serving The Best</h5>
        <h2> Bashful Event Services</h2>
        <p>
        Providing catering services for years.Crafting unique culinary experiences
        Adding more colors to your events.From classic to contemporary, we have got you covered
        Where your menu is a masterpiece.A taste like never before.



        </p>
        <div className="btn">
          <Link className="btn-link" href={""}>
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services