import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import warrior from '../images/warrior.jpg';

const Input = styled.div`
  display: flex; 
  justify-content: center; 
  color: #5e5e5e; 
  font-family: 'Barlow', sans-serif;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${warrior});
  background-size: cover;
  margin-bottom: 40px; 
`

const Form = styled.label`
  margin: 30px; 
  display: flex; 
  flex-direction: column; 
  width: 50%; 
`
const Text = styled.h2`
  margin: 20px; 
`

const Textarea = styled.textarea`
  height: 100px; 
  border-radius: 10px;
    @media(min-width:668px) and (max-width:1024px){
      height: 150px; 
    }
    @media(min-width: 1024px){
      height: 175px; 
    }
`

const StyledLink = styled(Link)`
  color: white;
  font-style: italic; 
  font-size: 1.4rem;
  text-decoration: none;
    &:hover {
      color: darkgrey;
  
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
  margin: 20px 0; 
`

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: solid 2px white;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: none;
    @media(min - width: 1024px) {
      width: 50px;
      height: 50px;
    }
`

export const ReviewInput = ({ setReviews }) => {
  const [userReview, setUserReview] = useState('');
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.userName);

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    // fetch('http://localhost:9001/reviews', {
    fetch('https://yogajuristen.herokuapp.com/reviews', {
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
  return (
    <form onSubmit={handleReviewSubmit}>
      <Input>
        <Form>
          <Text>Lämna gärna en hälsning eller en recension! </Text>
          <Textarea
            onChange={(event) => setUserReview(event.target.value)}
            value={userReview}
          />
          <ButtonContainer> {accessToken ? (<Button
            type='submit'
          >
            + </Button>
          ) : (<StyledLink to="/LogIn">Logga in först > </StyledLink>)}
          </ButtonContainer>
        </Form>
      </Input>
    </form>
  );
}

