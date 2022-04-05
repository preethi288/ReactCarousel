import React,{useState} from 'react'
import { useEffect } from 'react'
import './Carousel.css'

const Carousel = (props) => {
  const {SliderData}=props
  const [present,setPresent]=useState(0)
  const [autoSlide,setAutoSlide]=useState(false)
  const length=SliderData.length
  let slideInterval;

  //Previous Slide
  const previousSlide=()=>{
    setPresent(present===0?length-1:present-1)
  }

  //NextSlide
  const nextSlide=()=>{
    setPresent(present===(length-1)?0:present+1)
  }

  function autoSlideChange() {
    slideInterval = setInterval(nextSlide, 1200);
  }
  const auto=()=>{
    setAutoSlide(autoSlide=>!autoSlide)
  }

  useEffect(() => {
    if (autoSlide) {
      autoSlideChange();
    }
    return () => clearInterval(slideInterval);
  }, [present,autoSlideChange]);


  return (
    <div>
      <div className="top">
      <div className="left-icon">
       {/* <i className='fa fa-toggle-left' ></i> */}
       <button onClick={previousSlide}><i class="fa fa-angle-left"></i></button>
      </div>
      <div className='box container'>
        {
          SliderData.map((item,index)=>{
            return(
              <div className={index===present?'ActiveSlide':'Slide'} key={index}>
                {
                  index===present && item
                }
              </div>
            )
          })
        }
      </div>
      <div className="right-icon">
        <button onClick={nextSlide}><i className='fa fa-angle-right'></i></button>
      </div>
      </div>
      <div className="options">
        <button onClick={previousSlide}>Left</button>
        <button onClick={auto}>AutoSlide {autoSlide ? 'ON' :'OFF'}</button>
        <button onClick={nextSlide}>Right</button>
      </div>
    </div>
  )
}

export default Carousel
