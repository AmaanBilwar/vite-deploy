import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="sm:grid grid-cols-12 ">
        <div className="bg-pink-200 sm:col-span-2">1</div>
        <div className="bg-sky-200 sm:col-span-8">
          <div className="flex justify-between p-6">
            <h1>Amaan Bilwar</h1>
            <h1>experience</h1>
          </div>
        </div>
        <div className="flex justify-end bg-red-200 sm:col-span-2">3</div>
      </div>
    </>
  );
};

export default Home;
