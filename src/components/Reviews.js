import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user, login, getLoginMessage } from '../reducers/user';
import { ReviewInput } from './ReviewInput';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState('');

  const moment = require('moment');

  useEffect(() => {
    fetch('http://localhost:9001/reviews')
      .then((res) => res.json())
      .then((json) => setReviews(json));
  }, []);

  return (
    <section>
      {reviews.map((review) => (
        <div key={review._id}>
          {' '}
          <h2>{review.message}</h2>
          <h3>{moment(review.createdAt).format('YYYY-MM-DD')}</h3>
        </div>
      ))}
      <ReviewInput
        userReview={userReview}
        setUserReview={setUserReview}
        setReviews={setReviews}
      />
    </section>
  );
};
