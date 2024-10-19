import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

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
  github: `https://github.com/Prajwal-A/note-taker-app`,
  demo: `https://drive.google.com/file/d/1dYlW6kW7QCHglWhFF3R3vTDtAThfhCmt/view?usp=sharing`
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
    github: `https://github.com/Prajwal-A/CKD-Prediction-using-ML-with-research-paper`,
    demo: `https://drive.google.com/file/d/1FfJP3PbNR1Gm34vBnlEXWgYpRdkDC5-x/view?usp=sharing`
    
    },
    {
      id: 5,
      image: IMG5,
      title:'Snake Game using Java',
      github: `https://github.com/Prajwal-A/Snake-game-using_Java`,
      demo: `https://github.com/Prajwal-A/Snake-game-using_Java/blob/main/README.md`
      
      },
      {
        id: 6,
        image: IMG6,
        title:'Library Management System using DSA',
        github: `https://github.com/Prajwal-A/Library-Management-System-using-C-`,
        demo: `https://docs.google.com/document/d/1cBXgZ9_hQ2Rg1J2xzn07VbBSX8fbpkbP/edit?usp=sharing&ouid=111134878582509076602&rtpof=true&sd=true`
        
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
