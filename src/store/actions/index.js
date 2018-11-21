import axios from 'axios';
import cons from '../constents';

export function loadColor(){
/*     return (dispatch)=> {
        return axios.get('http://www.colr.org/json/color/random')
            .then(Response => {
                dispatch(getColor('#'+ Response.data.new_color));
            })
    } */
    fetch('http://www.colr.org/json/color/random')
        .then(Response => Response.json())
            .then(data => {
                return data.new_color
                console.log(data);
            })
};


export function getColor(color) {
    return {
        type: cons.changeColor,
        color: color,
    }
}