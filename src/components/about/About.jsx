import React from 'react'
import './about.css'
import ME from '../../assets/about-boy.jpg'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { GiAchievement } from 'react-icons/gi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'


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
              <HiOutlineAcademicCap className='about_icon' />
              <h5>Academics</h5>
              <ul>
                <li>
                <small>1. <strong>Bachelor of Engineering (B.E.) in Information Science & Engineering (ISE)</strong> – BMS College of Engineering</small>
                </li>
                <li>
                  <small>2. <strong> Graduation Year : </strong>2024</small>
                </li>
                <li>
                  <small>3. <strong> CGPA : </strong>9.22</small>
                </li>
              </ul>

            </article>

            <article className="about_card">
              <GiAchievement className='about_icon' />
              <h5>Skills</h5>
              <small>1. Efficient Time Management<br />2. Collaborative Teamwork <br />3. Analytical Problem solving<br />4. Attention to Detail<br />5. Active Listening and Communication skills.<br /></small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Work Experience</h5>
              <ul>
                <li>
                  <small>1. <samll>AI/ML Intern</samll> at Havells India Ltd, from January 2024 - June 2024 (6 months).</small>
                </li>
                <li>
                  <small>
                    2. <samll>Graduate Engineer Trainee (AI/ML)</samll> at Havells India Ltd, from July 2024 till present date.
                  </small>
                </li>
              </ul>

            </article>
          </div>

          <p>A self-motivated person with a strong interest in the core concepts of Computer Science. I am eager to leverage my skills and abilities to contribute to the development of the organization while continuously evolving through constant learning and professional growth.</p>


          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

