import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/img_viewer.css';

const addImg = ( _img ) =>{

    const img = document.createElement('img');
    img.src= _img;
    
    document.body.appendChild( img );
}

addImg( small );
addImg( big );