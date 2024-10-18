import React from 'react';
import { Link } from 'react-router-dom';

export default function Review() {
  return (
    <div>
      <header>
        <nav>
          <img src="/Assets/devlaunch-removebg-preview.png" alt="DevLaunch Logo" />
          <ul className="navlist">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/Pages/BootcampWidgets.html">Bootcamps</a></li>
            <li><a href="/Pages/MainReview.html">Review</a></li>
            <li><a href="/Pages/Contact.html">Contact Us</a></li>
            <li className="sign-in"><a href="/Pages/SignUp.html">Sign In</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>DevLaunch reviews</h1>
        <p><b>Overall Experience</b></p>
        <div className="review-container">
          <h3><b>Latest reviews</b></h3>
          <div className="container1">
            <h2>⭐⭐⭐</h2>
            <br />
            <p>I found the service extremely quick and efficient.</p>
            <p>The reason I gave three stars is to leave room for growth</p>
            <h3>Shane Filan</h3>
            <p className="date">9 June 2024</p>
          </div>
          <div className="container2">
            <h2>⭐⭐⭐⭐⭐</h2>
            <br />
            <p>My kid used to procrastinate on his future,</p>
            <p>but this is so quick that there's no more excuses</p>
            <h3>Sarah Harris</h3>
            <p className="date">27 June 2024</p>
          </div>
          <div className="container3">
            <h2>⭐⭐⭐⭐⭐</h2>
            <br />
            <p>The service definitely saves time.</p>
            <p>Highly recommended</p>
            <h3>David Morenas</h3>
            <p className="date">5 November 2023</p>
          </div>
        </div>
        <hr />
        <h2><b>Bootcamp reviews</b></h2>
        <div className="bootcamp-review">
          <div className="bootcamp1">
            <img src="/Assets/wethinkcode-logo.png" alt="wethinkcode" />
            <p>wethinkcode</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>Jonathan Hugo</b></h4>
            <p>5 days ago</p>
            <p>WeThinkCode really is the epitome of success makers</p>
            <p>I am very grateful for their programs</p>
            <button>Learn more</button>
          </div>
          <div className="bootcamp2">
            <img src="/Assets/codespaceLogo.jpg" alt="Codespace" />
            <p>Codespace Academy</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>John Murray</b></h4>
            <p>5 days ago</p>
            <p>Codespace Academy taught me what happens on the other side of discipline, and hard work.</p>
            <p>Codespace made me believe in my ability to be more than I ever believed I could be.</p>
            <button>Learn more</button>
          </div>
          <div className="bootcamp3">
            <img src="/Assets/uwc_logo.png" alt="uwc" />
            <p>UWC</p>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h4><b>Stewart Langley</b></h4>
            <p>7 days ago</p>
            <p>In spite of strike, staff still so helpful.</p>
            <p>Attending this university made me feel taken care of.</p>
            <p>I became more than I thought I could be.</p>
            <button>Learn more</button>
          </div>
        </div>
        <hr />
        <h1>Tell us what you think</h1>
        <h2>Our site</h2>
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="col-75">
              <input type="text" id="name" name="name" className="review-input" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="jobtitle">Job Title (if applicable):</label>
            </div>
            <div className="col-75">
              <input type="text" id="jobtitle" name="jobtitle" className="review-input" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="role">Role:</label>
            </div>
            <div className="col-75">
              <select id="role" name="role" className="review-input">
                <option value="1">Student</option>
                <option value="2">Graduate</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="linkedin">LinkedIn URL:</label>
            </div>
            <div className="col-75">
              <input type="text" id="linkedin" name="linkedin" className="review-input" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="rating">Rating:</label>
            </div>
            <div className="col-75">
              <select id="rating" name="rating" className="review-input">
                <option value="1">⭐(very poor)</option>
                <option value="2">⭐⭐(poor)</option>
                <option value="3">⭐⭐⭐(average)</option>
                <option value="4">⭐⭐⭐⭐(good)</option>
                <option value="5">⭐⭐⭐⭐⭐(excellent)</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="review">Review:</label>
            </div>
            <div className="col-75">
              <textarea id="review" name="review" rows="4" cols="50" className="review-input" placeholder="Write your review here..."></textarea>
            </div>
          </div>
          <br />
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="footer">
          <footer className="footer">
            <div className="container">
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com" target="_blank" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p>&copy; 2024 Coding Stars. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
