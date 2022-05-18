import React from "react";
import "./style.scss";

const TorLink = (props) => {
  return (
    <div>
      <div class="download_card">
        <a href={props.tor_url} class="button">
          <span class="material-symbols-outlined">download</span>
          <div class="download_link">
            {props.tor_quality}.{props.tor_type}
          </div>
        </a>
      </div>
    </div>
  );
};

export default TorLink;
