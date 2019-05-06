import React from 'react';
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css';

const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
    draggable: false
}
 
function Carousel(props) {
    
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
      {props.days}
    </Flickity>
  )
}

export default Carousel;