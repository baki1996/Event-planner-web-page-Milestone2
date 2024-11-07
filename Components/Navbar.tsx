"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {  FaInstagram } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub}  from "react-icons/fa";

const Navbar = () => {
  const [padding, setPadding] = useState("10px 12%");

  useEffect(() => {
    const handleResize = () => {
      setPadding(window.innerWidth <= 1700 ? "7px 8%" : "10px 12%");
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call for setting padding on load

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 60) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);


  // navbar mobile

  const [menuOpen, setMenuOpen] = useState(false); // State to toggle me

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };



  return (
    <header
      style={
        navBg
          ? {
              padding,
              background: "transparent",
              backdropFilter: "blur(35px)",
            }
          : { background: "fixed" }
      }
    >
      <h1>
        <Link href={"#"} className="logo">
          Welcome<span>Here</span>
        </Link>
      </h1>
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li>
          <Link className="Link" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Services"}>
            Services
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Gallery"}>
            Gallery
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Venues"}>
            Venues
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Contact"}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="h-right">
        <li>
          <Link className="Link" href={"#"}>
            {" "}
            Folow
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"}
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://github.com/baki1996"}
          >
            <FaGithub/>
          </Link>
        </li>
        <div id="menu-icon" onClick={toggleMenu}>
          <HiBars3 />
        </div>
      </div>
    </header>
  );
};

export default Navbar


