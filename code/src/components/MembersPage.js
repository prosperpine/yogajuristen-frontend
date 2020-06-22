import React from 'react';
import styled from 'styled-components';
import stones from '../images/stones.jpg'
import video from '../images/video.mp4'
import pranayama from '../images/pranayama.mp4'
import { useSelector } from 'react-redux';
import { QnA } from './QnA'
import { LogIn } from './LogIn';

const Main = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${stones});
  background-size: cover;
  display: flex; 
  justify-content: center;
`
const Section = styled.section`
  width: 80%; 
  border-radius:10px;
  background: white; 
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem; 
  padding: 22px; 
  margin: 24px;
  display: flex; 
  flex-direction: column;
  align-items: center; 
`

const Article = styled.article`
  display: flex; 
  align-items: center;
  flex-direction: column;
  wrap: row-wrap; 
`
const TextCard = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
    @media(min-width: 668px) {
      padding: 0 30px; 
    }
`
const Title = styled.h1`
  font-family: 'Julius Sans One', sans-serif;
  color: #303e27;
  font-size: 2.4rem;
  text-align: center; 
  margin: 26px;
`
const Video = styled.video`
  width: 80%;
  margin-bottom: 34px; 
`

const Subheading = styled.h2`
  font-family: 'Julius Sans One', sans-serif;
  color: #666d21;
  font-size: 2rem; 
  margin: 30px;
    @media(min-width: 668px)and(max-width: 1024px) {
      padding: 0 30px; 
}
`

//const USERS_URL = 'http://localhost:9001/users';

export const MembersPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.userName);

  if (accessToken) {
    return (
      <Main>
        <Section>
          <Title>Välkommen, {userName}!</Title>
          <Article>
            <TextCard>
              <Subheading>Klass: Höftöppnare</Subheading>
              <Video loop autoPlay>
                <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </Video>
              <Subheading>Klass: Pranayama</Subheading>
              <Video loop autoPlay>
                <source src={pranayama} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              </Video>
            </TextCard>
            <TextCard>
              <Subheading>Veckans frågor och tankar</Subheading>
              <QnA />
            </TextCard>
          </Article>
        </Section>
      </Main >
    );
  } else {
    return (
      <section>
        <Title>Logga in för att se denna sida.</Title>
        <LogIn />
      </section>
    )
  }
};


