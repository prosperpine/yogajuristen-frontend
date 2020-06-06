import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "./global-style";

const Container = styled.main`
  position: relative;
`;

const Section = styled.section`
  position: relative;
`;

const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
  padding: 2rem;
`;

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
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

const qnaData = [
  {
    title: "Fråga 1",
    content:
      "Ocean insofar hope against deceptions passion war transvaluation play intentions contradict inexpedient ocean. Decrepit society deceptions chaos noble joy convictions dead eternal-return free philosophy right mountains. "
  },
  {
    title: "Fråga 2",
    content:
      "Ocean insofar hope against deceptions passion war transvaluation play intentions contradict inexpedient ocean. Decrepit society deceptions chaos noble joy convictions dead eternal-return free philosophy right mountains. "
  },
  {
    title: "Fråga 3",
    content:
      "Ocean insofar hope against deceptions passion war transvaluation play intentions contradict inexpedient ocean. Decrepit society deceptions chaos noble joy convictions dead eternal-return free philosophy right mountains. "
  },
  {
    title: "Fråga 4",
    content: "Ocean insofar hope against deceptions passion war transvaluation play intentions contradict inexpedient ocean. Decrepit society deceptions chaos noble joy convictions dead eternal-return free philosophy right mountains. "
  },
  {
    title: "Fråga 5",
    content:
      "Ocean insofar hope against deceptions passion war transvaluation play intentions contradict inexpedient ocean. Decrepit society deceptions chaos noble joy convictions dead eternal-return free philosophy right mountains. "
  }
];

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
          console.log(refs[i].current.clientHeight);
        }}
      >
        {title}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

export const QnA = () => {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Section>
          <InnerSection>
            <AccordionContainer>
              <AccordionInner>
                <AccordionItems
                  accordionContent={qnaData}
                  refs={refs}
                  currentAccordion={currentAccordion}
                  setCurrentAccordion={setCurrentAccordion}
                  setBodyHeight={setBodyHeight}
                  bodyHeight={bodyHeight}
                />
              </AccordionInner>
            </AccordionContainer>
          </InnerSection>
        </Section>
      </Container>
    </>
  );
}
