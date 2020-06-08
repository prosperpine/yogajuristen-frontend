import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReviewInput } from './ReviewInput';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const moment = require('moment');

  useEffect(() => {
    fetch('http://localhost:9001/reviews')
      .then((res) => res.json())
      .then((json) => setReviews(json));
  }, []);

  return (
    <section>
      <ReviewInput
        // userReview={userReview}
        // setUserReview={setUserReview}
        setReviews={setReviews}
      />
      {reviews.map((review) => (
        <div key={review._id}>
          {' '}
          <h2>{review.message}</h2>
          <h3>{moment(review.createdAt).format('YYYY-MM-DD')}</h3>
          <p>{review.reviewer}</p>
        </div>
      ))}
    </section>
  );
};
