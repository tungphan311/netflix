import React from "react";
import "./ShowDetail.scss";

function ShowDetail() {
  return (
    <div className="ptrack-content">
      <div className="simpleSlider slider jawBoneDetails">
        <div className="sliderMask">
          <div className="sliderContent">
            <div class="detailsItem detailsTags">
              <div>
                <h4 class="listLabel">Genres</h4>
                <ul>
                  <li>
                    <a href="/browse/genre/26009">Crime TV Dramas</a>
                  </li>
                  <li>
                    <a href="/browse/genre/1002031">Fantasy TV Shows</a>
                  </li>
                  <li>
                    <a href="/browse/genre/2192320">TV Shows Based on Comics</a>
                  </li>
                  <li>
                    <a href="/browse/genre/11714">TV Dramas</a>
                  </li>
                </ul>
                <h4 class="listLabel">This show is</h4>
                <ul>
                  <li>
                    <a href="/browse/genre/100048">Irreverent</a>
                  </li>
                  <li>
                    <a href="/browse/genre/100041">Exciting</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
