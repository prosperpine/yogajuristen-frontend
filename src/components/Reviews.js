import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { ReviewInput } from './ReviewInput';

const Section = styled.section`
  display: flex;
  flex-direction: column;   
`
const RecentReviews = styled.div`
  display: flex; 
  align-items: center; 
  flex-direction: column; 
  width: 100%; 
  justify-content: flex-start;
`

const ReviewCard = styled.div`
  color: #5e5e5e; 
  padding: 16px; 
  font-family: Arial; 
  width: 60%;   
`

const Line = styled.hr`
  border-top: 1px solid lightgrey; 
  margin: 40px;
  width: 75%;
`

const Review = styled.h2`
  color: #5e5e5e; 
`
const Reviewer = styled.h4`
  font-style: italic; 
  margin-top: 20px; 
`

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const moment = require('moment');

  useEffect(() => {
    fetch('http://localhost:9001/reviews')
      .then((res) => res.json())
      .then((json) => setReviews(json));
  }, []);

  return (
    <Section>
      <ReviewInput
        // userReview={userReview}
        // setUserReview={setUserReview}
        setReviews={setReviews}
      />
      {reviews.map((review) => (
        <RecentReviews>
          <ReviewCard key={review._id}>
            {' '}
            <Review>"{`${review.message}`}"</Review>
            <Reviewer> - {review.reviewer}, {moment(review.createdAt).format('YYYY-MM-DD')} </Reviewer>
          </ReviewCard>
          <Line></Line>
        </RecentReviews>
      ))}
    </Section>
  );
};
