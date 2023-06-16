import React from 'react';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight'>
                My last <br />
                works.
              </h2>
              <p className='max-w-sm mb-16'>
                These are works I've done in the last few months. 
                These are jobs for companies, academics, and to 
                improve my skills.
              </p>
              <button className='btn btn-sm'><a href='https://github.com/aleffbg?tab=repositories' target='_blank' rel='noreferrer'>View all my projects</a></button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href='https://aleffbg.github.io/SiteMenuOnline/' target='_blank' rel='noreferrer'>Aleff Burger Site</a></span>
              </div>
              {/* subtitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Landing page design for burger menu.</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href='https://github.com/aleffbg/helpsoft_bycode.git' target='_blank' rel='noreferrer'>PrevMoc Site</a></span>
              </div>
              {/* subtitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Website for a pension company.</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'><a href='https://aleffbg.github.io/portfolio_aleff/' target='_blank' rel='noreferrer'>Previous portfolio</a></span>
              </div>
              {/* subtitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Another portfolio project made for me.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
