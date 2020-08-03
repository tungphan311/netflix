import React from "react";

function Activity() {
  return (
    <div className="details-page__container">
      <div className="header"></div>
      <div id="content-2-wide" style={{ paddingTop: "20px" }}>
        <div id="main">
          <div className="widgets">
            <div className="widget article ratings">
              <div className="ratings image-list">
                <h2>Your ratings</h2>
                <h4>Most Recently Rated</h4>
                <div className="title-list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
