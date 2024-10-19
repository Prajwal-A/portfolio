import React,{useRef} from 'react'
import './work.css'
import AVT1 from '../../assets/png-clipart-havells-logo-industry-electricity-company-marketing-text-electrical-switches.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const data = [
  {
  avatar: AVT1,
  org : 'Havells India Ltd.',
  duration: 'Jan 2024 - June 2024 (6 months)',
  role: 'AI/ ML intern ',
  project: 'Energy Auditor',
  task1: '1. Implemented mail features in daily data validation code using SMTP protocol where an alert mail will be sent automatically notifying missing values (> 30 mins),invalid values and if device status is offline.',
  task2: '2. For Calculating total Energy Consumption of Each device for a particular timestamp, implemented Data cleaning code to fill missing values and to remove outliers.',
  task3: '3. Used tools like Matplotlib and Plotly for Data visualization of power vs time for each device, the json data is fetched from Azure Data Lake Storage(ADLS) which is formatted to DataFrame.',
  skills: 'Python, Numpy, Pandas, Matplotlib, Plotly, Understanding of Neural Networking.'
  },
  {
  avatar: AVT1,
  org : 'Havells India Ltd.',
  duration: 'July 2024 to till date',
  role: 'AI/ ML Graduate Engineer Trainee (GET) ',
  project: 'Energy Forecasting',
  task1: '1.  Developed and implemented a bi-LSTM model for time series energy forecasting, with 1 hr frequency resolution in predicting future (1 month) energy consumption at a POC level.',
  task2: '2. Utilized various data cleaning methods, smoothening and normalization methods as well as Feature engineering methods to add new features apart from power and timestamp.',
  task3: '3. Fine tuning of hyper parameter to extract activations. Here, an activation indicates when an appliance begins to draw power from the electrical grid. By identifying activations, we can understand the usage patterns of individual appliances and predict future energy demands.',
  skills: 'Machine Learning, Deep Learning, Python, Numpy, Pandas, Scikit Learn, Tensorflow, EDA techniques - histogram, boxplot,etc'
  }
  
]

const Work = () => {
  // Create a reference for Swiper
  const swiperRef = useRef(null);

  return (
    <section id='achievements'>
      <h5>Let me tell you</h5>
      <h2>My Work Experience</h2>

      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='container container_achievement'
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Attach Swiper instance to ref
        }}
      >
        {
          data.map(({ avatar, org, role, duration, project, task1, task2, task3, skills }, index) => (
            <SwiperSlide key={index} className="achievement">
              <div className="avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h3>{org}</h3>
              <div className="name"><em>Role:</em> {role}</div>
              <h5>{duration}</h5>
              <div>Project: {project}</div>
              <div className='review'>{task1}</div>
              <div className='review'>{task2}</div>
              <div className='review'>{task3}</div>
              Skills Gained: <div className='review'>{skills}</div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* Button to trigger slide */}
      <div className="swipe-info">
        <button
          className="swipe-button"
          onClick={() => swiperRef.current?.slideNext()}  // Swipe to next slide
        >
          Swipe Right to See Previous Experience
        </button>
      </div>

    </section>
  )
}

export default Work;
