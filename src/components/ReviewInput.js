import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';

export const ReviewInput = ({ setReviews }) => {
  const [userReview, setUserReview] = useState('');
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.userName);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:9001/reviews', {
      method: 'POST',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ message: userReview, reviewer: userName })
    })
      .then((res) => res.json())
      .then((newReview) => {
        setReviews((previousReviews) => [newReview, ...previousReviews]);
        setUserReview(''); // will empty the textarea when the form is submitted
      });
  };
  if (!accessToken) {
    return <p>Log in to leave a review</p>
  } else {
    return (
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>
            <p>leave a review</p>
            <textarea
              onChange={(event) => setUserReview(event.target.value)}
              value={userReview}
            />

            <button
              // disabled={
              //   userReview.length < 6 || userReview.length > 140 ? true : false
              // }
              type='submit'
            >
              SUBMIT
          </button>
          </label>
        </div>
      </form>
    );
  }
};
