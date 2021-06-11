// Code MovieReviews Here
import React from 'react';

// const Review = ({ title, review_url, summary }) => (
//   <div className="review">
//     <h3><a href={review_url}>{ title }</a></h3>
//     <p>{summary}</p>
//   </div>
// )

// const MovieReviews = ({ reviews }) => (
//   <div className="review-list">
//     { reviews.map(review => <Review title={review.display_title} review_url={review.link.url} summary={review.summary_short} />) }
//   </div>
// )

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review =>   (<div className="review">
    <h3><a href={review.link.url}>{ review.display_title }</a></h3>
    <p>{review.short_summary}</p>
  </div>)) }
  </div>
)
export default MovieReviews; 