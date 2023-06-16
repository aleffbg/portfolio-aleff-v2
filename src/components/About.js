import React from 'react';
// countup
import CountUp from 'react-countup';
// link
import { Link } from 'react-router-dom';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <div className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1'>
          <h2 className='h2'>About me.</h2>
          <h3 className='h3 mb-[30px]' style={{ fontSize: `${15}px`}}>
            I'm a front-end and social media developer, 
            of Brazilian nationality, with skills in JS, React, 
            HTML, CSS, Python and some design platforms.
          </h3>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={5} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br /> 
                Experiense
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br /> 
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br /> 
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href='https://api.whatsapp.com/send?phone=5577981257967&text=Ol%C3%A1!' target='_blank'>Contact me</a></button>
              <Link to='https://drive.google.com/file/d/1Q_HsMmOjg03J881wFOKl23h6xdwwdNP0/view?usp=share_link' target='_blank' className='text-gradient btn-link'>
                Donwload CV
              </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
