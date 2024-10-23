import React from 'react';

function SecondaryNav({ onCoursesClick, onReviewsClick, onFinancingClick, onApplicationClick }) {
  return (
    <section className="secondary-nav">
      <ul>
        <li><a href="#" onClick={onCoursesClick}>Courses</a></li>
        <li><a href="#" onClick={onReviewsClick}>Reviews</a></li>
        <li><a href="#" onClick={onFinancingClick}>Financing</a></li>
        <li><a href="#" onClick={onApplicationClick}>Application Process</a></li>
      </ul>
    </section>
  );
}

export default SecondaryNav;
