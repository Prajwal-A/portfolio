import React from 'react'
import './about.css'
import ME from '../../assets/about-boy.jpg'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {GiAchievement} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
              <HiOutlineAcademicCap className='about_icon'/>
                <h5>Academics</h5>
                <small>SGPA : 9.4 <br /></small>
                <small>CGPA : 9.6</small>
              </article>

              <article className="about_card">
                <GiAchievement className='about_icon'/>
                <h5>Coding Skill</h5>
                <small>Coded 75+ programs on various competiive coding platforms <br /></small>
              </article>

              <article className="about_card">
                <AiOutlineFundProjectionScreen className='about_icon'/>
                <h5>Projects</h5>
                <small>Worked on 10+ projects <br /></small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus deleniti similique molestias ut iusto dolore corporis quibusdam ducimus. Saepe quibusdam dignissimos ab eos itaque nesciunt eligendi explicabo vitae, harum perspiciatis?</p>

            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About

