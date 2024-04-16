import React from "react";
import Link from 'next/link';


export default function Header() {
  return (
    <React.Fragment>
        <nav className="flex gap-5 justify-center items-center pt-120 h-28 ">
            <div className="max-w-screen-xl flex justify-center items-center gap-20">
      <div className=" flex gap-20">
      <ul><li><a href="" className="text-white">About Us</a></li></ul>
      <ul><li><a href="" className="text-white">Shop Now</a></li></ul>
      <ul><li><a href="" className="text-white">Products</a></li></ul>
      
      </div>
      <div>
      <Link href="/">
          
            <img src="/logo.png" alt="Logo" className="h-24" /> {/* Adjust the height as needed */}
          
        </Link>
      </div>
      <div className=" flex gap-20">
      <ul><li><a href="" className="text-white">Formula</a></li></ul>
      <ul><li><a href="" className="text-white">Reviews</a></li></ul>
      <ul><li><a href="" className="text-white">Contact Us</a></li></ul>
      
      </div>
      </div>
      </nav>
    </React.Fragment>
  );
}
