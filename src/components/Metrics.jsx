import React from "react";
import Navabar from "./Navabar";
import DailyMetric from "./DailyMetric";
import MusicMetric from "./MusicMetric";
import TrendingTracks from "./TrendingTracks";
import TrendingUsers from "./TrendingUsers";
import UserActivity from "./UserActivity";

function Metrics() {
  return (
    <div className="metrics">
      <Navabar />
      <div className="grid__one">
        <DailyMetric />
        <MusicMetric />
      </div>
      <div className="grid__two">
        <TrendingTracks />
        <TrendingUsers />
        <UserActivity />
      </div>
    </div>
  );
}

export default Metrics;
