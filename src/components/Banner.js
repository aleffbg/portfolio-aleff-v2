import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              ALEFF <span>GUIMARÃES</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Social Media',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Hello, I make websites and designs for your digital platforms, 
              expanding your business to another level.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'><a href='https://api.whatsapp.com/send?phone=5577981257967&text=Ol%C3%A1!' target='_blank' rel='noreferrer'>Contact me</a></button>
              <h1 className='text-gradient btn-link'>
                My Portfolio
              </h1>
            </motion.div>
            {/* sociais */}
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.linkedin.com/in/%C3%A1leff-borges-guimar%C3%A3es-055925192/' target='_blank' rel='noreferrer'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/aleffbg' target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
              <a href='https://www.instagram.com/aleffguimaraez/' target='_blank' rel='noreferrer'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
