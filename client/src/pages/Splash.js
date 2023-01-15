import React from "react";

// Image carousel for home banner
import { Carousel } from 'antd';
import { Image } from "antd";

// Images from assets
import One from '../assets/old_ships/tmp7mrkqgzv.png';
import Two from '../assets/cthulhu_whales/tmpstas7ntz.png';
import Three from '../assets/modern_ships/tmp797kt7v6.png';
import Four from '../assets/fire_whales/tmpho__5bmj.png';

const contentStyle = {
  width: "100%",
  height: "50vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  overflow: "hidden",
};


export default function Splash() {
  return (
    <div className="splash">
      <Carousel effect="fade" autoplay>
        <div>
          <div style={contentStyle}>
            <Image style={imageStyle} src={One} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image style={imageStyle} src={Two} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image style={imageStyle} src={Three} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image style={imageStyle} src={Four} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
