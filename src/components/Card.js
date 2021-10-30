import * as React from "react"
import { makeStyles } from "@mui/styles";
import JadeSvg from '../images/jade.svg'

const useStyles = makeStyles(() => ({
  'top-corner': {
    background: (props) => `linear-gradient(-49deg, ${props.color}, ${props.color} 50%, #211DD8 50%, #211DD8 100%)`,
    height: 16,
    width: 14,
    left: 88,
    top: 3,
    position: 'absolute',
    zIndex: 3,
  },
  'shape-1': {
    background: '#211DD8',
    width: 90,
    borderBottomRightRadius: 12,
  },
  'shape-2': {
    background: (props) => props.color,
    left: 97,
    borderTopLeftRadius: 14,
  },  
  'top-shape': {
    background: (props) => `linear-gradient(to top, ${props.color}, ${props.color} 50%, #211DD8 50%, #211DD8 100%)`
  },
  'middle-card': {
    background: (props) => props.color,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  'middle-shape': {
    position: 'relative',
    left: 35,
    width: '100%',
    height: 29,
    background: (props) => props.color,
    borderBottomLeftRadius: 9999,
  },
  'middle-corner': {
    background: (props) => `linear-gradient(-148deg, ${props.color}, ${props.color} 50%, #211DD8 50%, #211DD8 100%)`,
    height: 30,
    width: 40,
    left: 7,
    bottom: 3,
    position: 'absolute',
    zIndex: 3,
  },
  'bottom-shape': {
    position: 'relative',
    height: 18,
    width: '100%',
    overflow: 'visible',
    background: (props) => `linear-gradient(to bottom, ${props.color}, ${props.color} 50%, #211DD8 50%, #211DD8 100%)`,
    borderBottomRightRadius: 12,      
  },
  'shape-3': {
    height: 18,
    width: 150,
    background: (props) => props.color,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 999,
    position: 'absolute',
    right: 0,     
  },
  'shape-4': {
    height: 28,  
    width: '100%',
    right: 140, 
    background: '#211DD8',
    borderTopRightRadius: 999,
    position: 'absolute',
    zIndex: 4,
  }
}))

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
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${20 + i * 20}`} />)}
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
            {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${100 - i * 20} mirror`} />)}
          </div>
        </div>
        <div className={classes["shape-4"]} />
      </div>
  </div>
  )
}