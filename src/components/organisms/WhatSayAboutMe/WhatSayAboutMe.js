import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import { StyledUserImageImg } from "../../atoms/WhatSayAboutMe/StyledUserImage"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledWhatSayAboutMeSection } from "../../atoms/WhatSayAboutMe/StyledWhatSayAboutMeSection"
import { StyledWhatSayAboutMeWrapper } from "../../atoms/WhatSayAboutMe/StyledWhatSayAboutMeWrapper"
import { StyledSliderWrapper } from "../../atoms/WhatSayAboutMe/StyledSliderWrapper"

import { StyledSlide } from "../../atoms/WhatSayAboutMe/StyledSlide"
import { StyledLeftArrow } from "../../atoms/WhatSayAboutMe/StyledLeftArrow"
import { StyledRightArrow } from "../../atoms/WhatSayAboutMe/StyledRightArrow"
import { StyledPagination } from "../../atoms/WhatSayAboutMe/StyledPagination"
import { StyledUserWrapper } from "../../atoms/WhatSayAboutMe/StyledUserWrapper"
import { StyledUserImage } from "../../atoms/WhatSayAboutMe/StyledUserImage"

import { StyledWrapperWithoutPagination } from "../../atoms/WhatSayAboutMe/StyledWrapperWithoutPagination"
import { StyledSpanPagination } from "../../atoms/WhatSayAboutMe/StyledSpanPagination"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

import { StyledMyOfferSpiral } from "../../atoms/MyOffer/StyledMyOfferSpiral"
import aboutSpiral from "../../../images/aboutspiral.svg"

const WhatSayAboutMe = () => {
  const whatSayAboutMeContent = useStaticQuery(graphql`
    query WhatSayAboutMeContent {
      allDatoCmsWhatTheySayAboutMe {
        nodes {
          customerName
          customerPhoto {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          whatTheSayAboutMeContent
        }
      }
    }
  `)
  const allDatoData = whatSayAboutMeContent.allDatoCmsWhatTheySayAboutMe
  const [[slide, direction], setSlide] = useState([0, 0])
  const slideIndex = wrap(0, allDatoData.nodes.length, slide)
  const paginate = newDirection => {
    setSlide([slide + newDirection, newDirection])
  }
  return (
    <StyledWhatSayAboutMeSection>
      <StyledMyOfferSpiral>
        <img src={aboutSpiral} alt="spiral" />
      </StyledMyOfferSpiral>
      <StyledWhatSayAboutMeWrapper>
        <StyledSliderWrapper>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="bold"
            hasdeclaredpadding="0 0 65px 0"
            as="h2"
          >
            Co o mnie mówią
          </StyledText>

          <AnimatePresence initial={false} custom={direction}>
            {allDatoData.nodes
              .filter((_, iterator) => iterator === slideIndex)
              .map(slideItem => (
                <StyledSlide
                  transition={{
                    type: "spring",
                    duration: 0.8,
                  }}
                >
                  <StyledWrapperWithoutPagination
                    key={`${slide}-wrapper`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                    }}
                  >
                    <StyledLeftArrow>
                      <StyledButtonPagination
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(-1)}
                      >
                        <IoIosArrowBack />
                      </StyledButtonPagination>
                    </StyledLeftArrow>
                    <StyledText
                      hasdeclaredmaxwidth="780px"
                      hasdeclaredtextalign="center"
                      hasdeclaredfontweight="medium"
                      hasdeclaredfontfamily="Raleway"
                      hasdeclaredlineheight="1.35em"
                      hasdeclaredpadding="0 20px"
                      as="p"
                    >
                      {slideItem.whatTheSayAboutMeContent}
                    </StyledText>
                    <StyledRightArrow>
                      <StyledButtonPagination
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => paginate(1)}
                      >
                        <IoIosArrowForward />
                      </StyledButtonPagination>
                    </StyledRightArrow>
                  </StyledWrapperWithoutPagination>
                  <StyledUserWrapper
                    key={`${slide}-user`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                      delay: 0.1,
                    }}
                  >
                    <StyledUserImage>
                      <StyledUserImageImg
                        fluid={slideItem.customerPhoto.fluid}
                      />
                    </StyledUserImage>
                    <StyledText
                      hasdeclaredfontcolor="#23242A"
                      hasdeclaredfontweight="bold"
                      hasdeclaredfontsize="30px"
                      hasdeclaredpadding="0 0 0 27px"
                    >
                      {slideItem.customerName}
                    </StyledText>
                  </StyledUserWrapper>
                </StyledSlide>
              ))}
          </AnimatePresence>
        </StyledSliderWrapper>
        <StyledPagination>
          {allDatoData.nodes.map((slideItem, iterator) => (
            <StyledSpanPagination
              active={iterator === slideIndex}
            ></StyledSpanPagination>
          ))}
        </StyledPagination>
      </StyledWhatSayAboutMeWrapper>
    </StyledWhatSayAboutMeSection>
  )
}

export default WhatSayAboutMe
