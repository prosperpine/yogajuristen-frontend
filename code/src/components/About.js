import React from 'react';
import styled from 'styled-components';
import lake from '../images/lake.jpg'
import profile from '../images/profile.jpg'
import RYT from '../images/RYT.png'
import yogayama from '../images/yogayama.png'

const Main = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${lake});
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
`

const Article = styled.article`
  display: flex; 
  flex-direction: column;
  wrap: row-wrap; 
`

const TextCard = styled.div`
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

const Subheading = styled.h3`
  font-family: 'Julius Sans One', sans-serif;
  color: #666d21;
  margin-bottom: 16px;
    @media(min-width: 668px) {
      padding: 0 30px; 
    }
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  align-self: center; 
  width: 70%;
  margin: 26px;
    @media(min-width: 668px) {
      width: 50%;}
    @media(min-width: 1024px){
      width: 30%;
      margin-bottom: 30px; 
    }
`

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
    @media(min-width: 668px) {
      flex-direction: row; 
      justify-content: center; 
    }
`

const Logo = styled.img`
  width: 60%;
  align-self: center;
  margin: 16px;
    @media(min-width: 668px) {
      width: 40%;
    }
    @media(min-width: 1024px){
      width: 20%;
    }
`
export const About = () => {
  return (
    <Main>
      <Section>
        <Title>EMELIE THYRFALK</Title>
        <ProfilePicture src={profile} alt="profile picture"></ProfilePicture>
        <Article>
          <TextCard>
            Jag arbetar som jurist, är tvåbarnsmamma och delar yoga. <br /><br />
            För många låter kanske detta som en oväntat och svårkombinerad ekvation. För mig är den helt sann och ett bevis på
            att yoga är för alla. Det är just den kombinationen som lärt mig
            hur viktigt det är att hitta balans mellan å ena sidan arbete och å
            andra sidan återhämtning för att må bra, vara närvarande, kunna
            prestera väl och ta bra beslut.
          </TextCard>
          <Subheading>Min utbildning</Subheading>
          <TextCard>
            Yogayama teacher training 200 h (hathayoga).
            Utbildningen innehåller bland annat anatomi och skadeprevention, ayurveda och
            kost (läran om livet), forskning kring yoga och dess effekter, hathayogans filosofi,
            andning och andingstekniker (pranayama), meditation mm.
            Utöver min yogalärarutbildning har jag genomfört diverse
            utbildningar inom ledarskap, kommunikation och pedagogik.
          </TextCard>
          <Logos>
            <Logo src={RYT} alt="Logo of RYT"></Logo>
            <Logo src={yogayama} alt="Logo of Yogayama"></Logo>
          </Logos>
          <Subheading>Min väg till yogan</Subheading>
          <TextCard>
            Allt eftersom livet brusat på har min längtan efter inre frid blivit
            allt starkare. I takt med livets prövningar har jag utforskat vad
            kärnan av mig själv egentligen vill. Jag har mina rötter inom
            friskapande dans och har genom dansen arbetat mycket med att
            uttrycka känslor, känna in kroppen och lyssna inåt. Yogan mötte
            jag senare i vuxen ålder och mötet var inte enbart förtjusande.
            Det påverkades av min uppfattning av att yoga innebar svåra
            positioner, perfektionism, prestationshets osv. Det kändes
            motsägelsefullt och allt annat än sinnesstillande. Det var först
            genom mötet med yinyogan som min uppfattning om yogan
            skiftade.
            <br /> <br />
            Under min första föräldraledighet fick jag djupare
            kontakt med min längtan efter inre frid och en seriös önskan om
            att göra något meningsfullt med livet. När jag kom bort från
            samhällets brus efter födseln av min dotter bestämde jag mig för
            att fördjupa detta ytterligare genom att utbilda mig till yogalärare.
            <br /><br />
            Genom detta har jag lärt känna yogan, dess syften och effekter,
            utifrån ett mer rättvist perspektiv. Yogan har därefter skapat
            ringar på vattnet vad gäller återhämtning, närvaro, fokus och
            framförallt frid i mitt liv. Detta på ett oerhört betydelsefullt sätt.
            Min längtan och önskan är att få sprida yogan och det fantastiska
            som yogan gör med oss vidare till andra. Med en förhoppning
            om att fler ska få uppleva det som jag upplevt genom yogan - ett
            mer harmoniskt och balanserat liv.
          </TextCard>
        </Article>
      </Section>
    </Main>
  )
};
