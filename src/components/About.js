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
          <h3 className='h3 mb-[50px]' style={{ fontSize: `${15}px`, lineHeight: '2'}}>
          I am a Brazilian software developer with a strong skill set 
          in various programming languages and design platforms. My expertise includes 
          JavaScript, React, HTML, CSS, and Python. I have a deep passion for crafting 
          user-friendly web interfaces and engaging social media experiences. My goal is to 
          create innovative and visually appealing digital solutions that resonate with audiences. 
          With a keen eye for design and a love for coding, I bring a unique blend of creativity 
          and technical proficiency to every project I undertake.
          </h3>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <span style={{ fontFamily: 'Arial' }}><CountUp start={0} end={3} duration={5} /></span> : null}
              </div>
              <div className='font-primary text-sm'>
                Years of <br /> 
                Experiense
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <span style={{ fontFamily: 'Arial' }}><CountUp start={0} end={10} duration={3} /></span> : null}
                +
              </div>
              <div className='font-primary text-sm'>
                Projects <br /> 
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <span style={{ fontFamily: 'Arial' }}><CountUp start={0} end={100} duration={3} /></span> : null}
                +
              </div>
              <div className='font-primary text-sm'>
                Satisfied <br /> 
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href='https://api.whatsapp.com/send?phone=5577981257967&text=Ol%C3%A1!' target='_blank' rel='noreferrer'>Contact me</a></button>
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
