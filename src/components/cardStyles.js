import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  'list-card': {
    maxWidth: 500,
    marginRight: 8,
  },
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
  'ellipsis-card': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    height: 147
  },
  "ellipsis-card-wrapper": {
    height: 155
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