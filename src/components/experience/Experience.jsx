import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Skills</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>HTML & CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Shell Script</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>MySQL & MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Concepts Learnt</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>OOPS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Software Testing</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Web & Android Dev</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Deep Learning</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Machine Learning</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>OS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Cloud Computing</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>DBMS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>Comp Networking</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience
