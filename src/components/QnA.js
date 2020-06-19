import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "./global-style";
import { qnaData, AccordionItems } from "./QnAData"

const Container = styled.main`
  position: relative;
`;

const Section = styled.section`
  position: relative;
  display: flex;
    justify-content: center;
`;

const InnerSection = styled.div`
  position: relative;
  max-width: 80%;
`;

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

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
