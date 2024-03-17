import React from "react";
import { BsArrowRight } from "react-icons/bs";
import song1 from "../assets/song1.jpeg";
import song2 from "../assets/song2.jpeg";
import song3 from "../assets/song3.jpeg";

function TrendingTracks() {
  return (
    <div className="tranding__tracks">
      <div className="trending__info">
        <div>
          <h3>Trending Tracks</h3>
          <span>Today</span>
        </div>
        <div className="icon">
          <BsArrowRight />
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song1} alt="song" />
          <div>
            <h4>Positions</h4>
            <span>Ariana Grande</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>3.49M playes</span>
          <span>232k likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song2} alt="song" />
          <div>
            <h4>Tramplone</h4>
            <span>Zyan Malik</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>41.44B playes</span>
          <span>512k likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song3} alt="song" />
          <div>
            <h4>Without Me</h4>
            <span>Hasley</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>15.41M playes</span>
          <span>411k likes</span>
        </div>
      </div>
    </div>
  );
}

export default TrendingTracks;
