import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Voting System Website',
  github: `https://github.com/Prajwal-A/online-voting-system`,
  demo: `https://github.com/Prajwal-A/online-voting-system/blob/main/README.md`
  },
  {
  id: 2,
  image: IMG2,
  title: 'Notes App Using Android Studio',
  github: `https://github.com`,
  demo: `https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma`
  },
  {
  id: 3,
  image: IMG3,
  title:'IPL win Prediction using ML',
  github: `https://github.com/Prajwal-A/ipl-win-prediction`,
  demo: `https://prajwal-a-ipl-win-prediction-app-gzgnz1.streamlit.app/`
  },
  {
    id: 4,
    image: IMG4,
    title:'Chronic Kidney Disease Prediction using ML',
    github: `https://github.com`,
    demo: `https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress`
    
    },
    {
      id: 5,
      image: IMG5,
      title:'Snake Game using Java',
      github: `https://github.com`,
      demo: `https: //dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma`
      
      },
      {
        id: 6,
        image: IMG6,
        title:'Library Management System using DSA',
        github: `https://github.com`,
        demo: `https: //dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma`
        
        }
  ]
  
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
          {
            data.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio_item'>
                  <div className="portfolio_image-item">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className="btn" target='_blank'>Code</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Project Overview</a>
                  </div>
                </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default Portfolio
