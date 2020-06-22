import React from "react";
import styled, { css } from "styled-components";

const AccordionItem = styled.div`
font-family: Barlow, sans-serif;
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`;

export const qnaData = [
  {
    question: "Varför ljudar många OM innan och efter klass? ",
    answer:
      "När vi ljudar OM utövar vi något som kallas chanting, förenklat en typ av sång. OM sägs vara det grundläggande ljudet i universum, det universala ljudet. Vibrationerna av universums alla ljud. Att ljuda OM sägs ha en positiv, transformerande effekt på vårt såväl vårt nervsystem som vår fysiska kropp.Det ska även väcka vår latenta fysiska och mentala kraft."
  },
  {
    question: "Hur får man in yoga i kontorsarbetet? ",
    answer:
      "Man ställer klockan för att diciplinera sig till att ta en paus och utöva lite yoga, andning och meditaiton. Att hitta disciplinen för att utöva yoga är även det en del av yogapraktiken. Har du kort om tid skulle jag rekommendera att du framförallt arbetar med att sluta ögonen och djupandas i åtminstone 5 minuter. Har du ytterligare 5 minuter kan du göra 1-3 yogapositioner som passar för mindre utrymmen och i kläder som kanske inte är de mest flexibla. Se video. "
  },
  {
    question: "Varför är yoga så dyrt? ",
    answer:
      "Ja det kan man fråga sig och mitt svar på den frågan är att jag faktiskt inte vet varför.Förmodligen för att omkostnaderna för välutbildade lärare, lokaler osv behöver täckas upp för. En yogastudio har långt ifrån lika stort antal medlemmar som exempelvis ett gym samt hålls ju enbart klasser och man betalar inte för att komma och träna i en lokal med vikter som inte kräver ledning v någon tränare. Detta gör ju även yogaverksamheterna mer kostnadskänsliga. Mot bakgrund av detta är det tyvärr nog svårt att komma bort från den kommersiella biten av yogan, med det är å andra sidan en riktigt bra investering. "
  },
  {
    question: "Handlar inte yoga om religion? ",
    answer: "Hathayogan härstammar visserligen ur hinduismen som dock är en trosuppfattning och ingen religon. Dock är den moderna yogan inte alls fokuserad på detta i någon nämnvärd omfattning varför mitt svar på denna fråga ändå får bli nej. Dagens yoga får handla lite om vad du vill att den ska handla om men för de allra flesta handlar yoga om att hitta sig själv, sin inre kompass och att bli hälsosam såväl psykiskt som fysiskt."
  }
];

export const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ question, answer }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
          console.log(refs[i].current.clientHeight);
        }}
      >
        {question}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{answer}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

