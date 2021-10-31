import * as React from "react"
import { useStyles } from "./cardStyles";
import JadeSvg from '../images/jade.svg'
import listIcon from '../images/list-icon.svg'
import linkIcon from '../images/link.svg'

export function ListCard (props) {
  const classes = useStyles(props)
  return (
    <div className={classes["list-card"] + " w-full rounded-r-xl overflow-hidden mb-8"}>    
      <div className={classes["top-shape"] + " w-full h-6 relative"}>
        <div className={classes["shape-1"] + " h-full absolute top-0 z-2"}>
          <p className="font-bold ml-3 -translate-y-1-1">{props.title}</p>
        </div>
        <div className={classes["top-corner"]}/>
        <div className={classes["shape-2"] + " w-full h-full absolute top-0 z-1"}>
          <div className="ml-2 mt-2 w-28 flex">
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${20 + i * 20}`} />)}
          </div>              
        </div>
      </div>
      <div className="relative">
        <div className={classes["middle-card"] + " w-full flex justify-between items-center"}>   
          <img src={listIcon} alt="" className="ml-6" />
          <div className={classes["ellipsis-card-wrapper"] + " w-full pl-7 pr-9 max-sm:px-4 pb-3 pt-5"}>
            <div className="w-full flex justify-between items-center">
              <p>Project name</p>     
              <img src={linkIcon} alt="" className="cursor-pointer" />         
            </div>
            <div className={classes["ellipsis-card"]} >
              <p className="text-sm pt-2">
                {props.text}
              </p>
              
            </div>
          </div>
        </div>
        <div className={classes["middle-shape"]} />
        <div className={classes["middle-corner"]} />          
      </div>
      <div className={classes["bottom-shape"]}>
        <div className={classes["shape-3"]}>
          <div className="ml-3 transform -translate-y-1 w-28 flex">
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${100 - i * 20} mirror`} />)}
          </div>
        </div>
        <div className={classes["shape-4"]} />
      </div>
  </div>
  )
}