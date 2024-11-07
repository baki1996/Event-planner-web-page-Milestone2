import Link from "next/link";
import React from "react";

const Homes = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/img/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="homes"
    >
      <div className="homes-text">
        <h5>Lets</h5>
        <h1>
          Planning Your <br />
          Enchanted Event With Us
        </h1>
        <p>
          {" "}
        Making your dream event a reality.<br /> Your vision, our expertise.
,Events that leave lasting impressions.


        </p>
        <button className="btn">
          <Link className="btn-link" href={"#"}>Book an Event</Link>
        </button>
      </div>
    </section>
  );
};

export default Homes;
