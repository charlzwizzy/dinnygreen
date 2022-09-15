import React from 'react'

const header = () => {
  return (

    <header>
      <div className="container">
        <div className="left">
          <p> <span>Call</span>:+234 9012624152&nbsp;</p>
          <p className='shift'> <span>Support</span> :info@yourcompany.com</p>
        </div>
        <div className='right'>
          <a className='move' href="/">Log in</a>
          <button className='button'>Register</button>
        </div>
      </div>


      <div className="nav-bar">
        <div class="logo">
          <img src="/Images/logo." alt="" />
        </div>
        <div class="menu">
          <ul>
            <li> <a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="service">Service</a></li>
            <li><a href="instructors">Instructors</a></li>
            <li> <a href="courses">Courses</a> </li>
            <li> <a href="blog">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <button class="btn-2">Contact</button>
          </ul>

        </div>
      </div>
      {/* first-container */}
      <div class="firstcontainer">


        <div class="page">
          <h3>
            Give Your Child A <br /> Chance To Be Unique
          </h3>
          <p>
            Experts agree that a child personality doesn't fully form <br /> until they are in elementary school. <br />
            <a href="/">Signin</a> to enroll your child
          </p>
          <div className="btn-1">

            <div className="signbtn">

              <button className='sign'>Signup</button>

            </div>
            <button className='learn'>Learn more</button>
          </div>


        </div>
        <div className="blur">

        </div>
      </div>


    </header>


  )
}

export default header