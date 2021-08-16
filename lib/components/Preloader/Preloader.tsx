import React from "react";

//types
import { PreloaderProps } from "../../types/ElementsProps";

//styles
import "../../assets/scss/components/preloader.scss";


function Preloader({ color = "#FFF", height = 4, width = 4, boxHeight }: PreloaderProps): JSX.Element {
  return (
    <div className="spinner" style={{ height: `${boxHeight}px` }}>
      <div className="bounce1" style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}/>
      <div className="bounce2" style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}/>
      <div className="bounce3" style={{ backgroundColor: color, height: `${height}px`, width: `${width}px` }}/>
    </div>
  );
}


export default Preloader;
