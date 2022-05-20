import React from "react";
import "./style.scss";

const Cast = (props) => {
  return (
    <div>
      <div class="top_cast">
        <div class="cast_info">
          <div class="invd_cast">
            <div class="cast_avatar">
              <img src={props.cast_image} alt="cast_avatar" />
            </div>
            <div class="cast_info">
              <div class="cast_name">
                <a href={"https://www.imdb.com/name/nm" + props.cast_imdb_code}>
                  {props.cast_name}
                </a>{" "}
                as {props.cast_character_name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cast;
