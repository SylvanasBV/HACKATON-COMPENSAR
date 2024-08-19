import React from 'react';
import './News.css';
import slide1 from '../../img/Cult_of_the_lamp.png';
import slide2 from '../../img/Dragons_Dogma.png';
import slide3 from '../../img/F1.png';


function News() {

      return (
          <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto'>
            <h2 className='title'>NOVEDADES</h2>
            <div className='news w-[95%] self-center rounded-2xl m-2 flex'>
                <div className='w-[70%] h-full'>
                    <div className='w-full h-full relative'>
                        <img src={slide1} alt="First Slide"/>
                        <div className='text_box absolute bottom-0 w-full h-[20%] rounded-xl p-4 flex flex-row'>
                            <p className='w-[60%] mx-8 my-0'>
                                The EuroLeague Finals Top Scorer is the individual award for the player 
                                that gained the highest points in the EuroLeague Finals
                            </p>
                            <button className='w-[40%] bg-black rounded-2xl p-1 m-2'>
                                <h2 className='text-white m-0'>Continua leyendo</h2>
                            </button>
                        </div>

                    </div>
                </div>
                <div className='w-[30%] flex flex-col p-3 justify-evenly gap-3'>
                    <div className='w-full h-72 self-center bg-white rounded-3xl relative'>
                        <img src={slide2} alt='' className='w-full h-[80%]' />
                        <div className='absolute w-full h-[40%] rounded-xl flex flex-col bottom-0 bg-white p-3 px-3'>
                            <p className='date mx-1 my-0'>
                                Race98 - 03 June 2023
                            </p>
                            <p className='title me-7 my-0 text-black'>
                                Ethiopian runners took the top four spots.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-70 self-center bg-white rounded-3xl relative'>
                        <img src={slide3} alt='' className='w-full h-[80%]' />
                        <div className='absolute w-full h-[40%] rounded-xl flex flex-col bottom-0 bg-white p-3 px-3'>
                            <p className='date mx-1 my-0'>
                                Race98 - 03 June 2023
                            </p>
                            <p className='title me-7 my-0 text-black'>
                                Ethiopian runners took the top four spots.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
      
}

export default News
