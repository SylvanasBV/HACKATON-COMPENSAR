import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Foros.css'
import Slide1 from "../../img/Foro_BTS.png";
import Slide2 from "../../img/Foro_Counter_Strike.png";
import Slide3 from "../../img/Foro_LOL.png";
import Slide4 from "../../img/Foro_Running.png";

function Foros() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      centerMode: true,
      focusOnSelect: true,
    };

    const Items = [
      {
        title: 'Cultura pop',
        subtitle: 'BTS',
        description: 'Conoce nuestra cultura',
        image: Slide1,
        btn1Text: 'Conocenos',
        btn2Text: 'Unete',
      },
      {
        title: 'Gaming',
        subtitle: 'LOL',
        description: 'Entra y juga',
        image: Slide3,
        btn1Text: 'Conocenos',
        btn2Text: 'Unete',
      },
      {
        title: 'Fitness',
        subtitle: 'Running',
        description: 'Grupos de spinning',
        image: Slide4,
        btn1Text: 'Conocenos',
        btn2Text: 'Unete',
      },{
        title: 'Counter Strike',
        subtitle: 'Gaming',
        description: 'Entra y juega',
        image: Slide2,
        btn1Text: 'Conocenos',
        btn2Text: 'Unete',
      },
    ];


  return (
    <div className="w-full m-auto max-w-screen-xl mx-auto">
      <h2 className='foros_title m-0'>FOROS</h2>
      <Slider {...settings}>
        {Items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-2 px-4">
            <div className='foros_slide rounded-2xl pb-2 shadow-md shadow-slate-400'>
              <div className='h-72'>
                <img src={item.image} alt={item.title} className='w-full h-full rounded-t-xl' />
              </div>
              <div className="foros_content mt-1 p-3 px-3 text-left">
                <h4 className="m-0 font-bold text-sm text-gray-500">{item.title}</h4>
                <h5 className="m-0 font-bold text-2xl">{item.subtitle}</h5>
                <p className="m-0 text-xl text-black">{item.description}</p>
                <div className="flex justify-center gap-5 mt-2">
                  <button className="text-white font-bold py-2 px-4 rounded-2xl" style={{backgroundColor:'var(--secondary)'}}>
                    {item.btn1Text}
                  </button>
                  <button className="text-white font-bold py-2 px-4 rounded-2xl" style={{backgroundColor:'var(--quaternary)'}}>
                    {item.btn2Text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Foros
