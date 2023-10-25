import { useState } from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <div className="start-game-wrapper">
      <div className="title">
        <img src="/title-ghost.png" alt="" />
      </div>
      <h2>Creep and Crawl, Answer them All</h2>
      <Link to="/question-page">
        <button className="startquiz-btn btn-layout">
          <div className="startquiz-btn-content">
            <span className="btn-text">Start quiz!</span>
          </div>
        </button>
      </Link>
    </div>
  );
};
