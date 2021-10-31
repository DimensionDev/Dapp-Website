import * as React from "react"
import { useStyles } from "./cardStyles";
import JadeSvg from '../images/jade.svg'

export function Card (props) {
  const classes = useStyles(props)
  return (
    <div className="w-full rounded-r-xl overflow-hidden mb-8">    
      <div className={classes["top-shape"] + " w-full h-6 relative"}>
        <div className={classes["shape-1"] + " h-full absolute top-0 z-2"}>
          <p className="font-bold ml-3 -translate-y-1-1">{props.title}</p>
        </div>
        <div className={classes["top-corner"]}/>
        <div className={classes["shape-2"] + " w-full h-full absolute top-0 z-1"}>
          <div className="ml-2 mt-2 w-28 flex">
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" style={{opacity: 0.2 + i * 0.2}} />)}
          </div>              
        </div>
      </div>
      <div className="relative">
        <div className={classes["middle-card"] + " w-full"}>
          <p className="pl-7 pr-9 max-sm:px-4 pt-7 pb-3">
            {props.text}
          </p>
        </div>
        <div className={classes["middle-shape"]} />
        <div className={classes["middle-corner"]} />          
      </div>
      <div className={classes["bottom-shape"]}>
        <div className={classes["shape-3"]}>
          <div className="ml-3 transform -translate-y-1 w-28 flex">
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" style={{opacity: 1 - i * 0.2}} className="mirror" />)}
          </div>
        </div>
        <div className={classes["shape-4"]} />
      </div>
  </div>
  )
}