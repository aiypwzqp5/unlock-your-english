import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { StyledHowItAllStartedSection } from "../../atoms/HowItAllStarted/StyledHowItAllStartedSection"
import { StyledHowItAllStartedWrapper } from "../../atoms/HowItAllStarted/StyledHowItAllStartedWrapper"
import { StyledMyOfferSpiral } from "../../atoms/MyOffer/StyledMyOfferSpiral"
import { StyledText } from "../../atoms/Text/StyledText"
import aboutSpiral from "../../../images/aboutspiral.svg"
import { StyledPrivatelyImage } from "../../atoms/HowItAllStarted/StyledPrivatelyImage"
import { StyledPrivatelyImageWrapper } from "../../atoms/HowItAllStarted/StyledPrivatelyImageWrapper"
import { StyledPrivatelyWrapper } from "../../atoms/HowItAllStarted/StyledPrivatelyWrapper"
import { StyledPrivatelyTextWrapper } from "../../atoms/HowItAllStarted/StyledPrivatelyTextWrapper"
import { StyledHowItAllStartedTopBar } from "../../atoms/HowItAllStarted/StyledHowItAllStartedTopBar"
import { StyledHowItAllStartedBottomBar } from "../../atoms/HowItAllStarted/StyledHowItAllStartedBottomBar"

const HowItAllStarted = () => {
  const howItAllStartedData = useStaticQuery(graphql`
    query howItAllStartedDataQuery {
      datoCmsAboutMeContent {
        privately
        privatelyImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      allDatoCmsHowitallstartedparagraph {
        nodes {
          howitallstarted
        }
      }
      allDatoCmsOwnlanguageschool {
        nodes {
          ownlanguageschoolparagraph
        }
      }
    }
  `)

  return (
    <StyledHowItAllStartedSection>
      <StyledMyOfferSpiral>
        <img src={aboutSpiral} alt="spiral" />
      </StyledMyOfferSpiral>
      <div>
        <StyledHowItAllStartedWrapper>
          <StyledHowItAllStartedTopBar>
            <StyledText
              hasdeclaredfontsize="64px"
              hasdeclaredfontcolor="var(--blue)"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="0 0 54px 0"
              as="h2"
            >
              Jak to się zaczęło?
            </StyledText>
            {howItAllStartedData.allDatoCmsHowitallstartedparagraph.nodes.map(
              text => (
                <StyledText
                  hasdeclaredfontsize="18px"
                  hasdeclaredfontfamily="Raleway"
                  hasdeclaredfontweight="medium"
                  hasdeclaredlineheight="1.32em"
                  hasdeclaredpadding="0 0 34px 0"
                  dangerouslySetInnerHTML={{
                    __html: text.howitallstarted,
                  }}
                />
              )
            )}
          </StyledHowItAllStartedTopBar>
          <StyledHowItAllStartedBottomBar>
            <StyledText
              hasdeclaredfontsize="48px"
              hasdeclaredfontcolor="var(--red)"
              hasdeclaredtextalign="right"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="34px 0 54px 0"
              as="h3"
            >
              A może własna szkoła językowa?
            </StyledText>
            {howItAllStartedData.allDatoCmsOwnlanguageschool.nodes.map(text => (
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredfontfamily="Raleway"
                hasdeclaredfontweight="medium"
                hasdeclaredlineheight="1.32em"
                hasdeclaredpadding="0 0 34px 0"
                dangerouslySetInnerHTML={{
                  __html: text.ownlanguageschoolparagraph,
                }}
              />
            ))}
          </StyledHowItAllStartedBottomBar>
        </StyledHowItAllStartedWrapper>
      </div>
      <div>
        <StyledPrivatelyWrapper>
          <StyledPrivatelyTextWrapper>
            <StyledText
              hasdeclaredfontsize="64px"
              hasdeclaredfontcolor="var(--blue)"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="0 0 88px 0"
              as="h3"
            >
              A prywatnie...
            </StyledText>
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredfontweight="medium"
              hasdeclaredlineheight="1.32em"
              hasdeclaredmaxwidth="447px"
              dangerouslySetInnerHTML={{
                __html: howItAllStartedData.datoCmsAboutMeContent.privately,
              }}
            />
          </StyledPrivatelyTextWrapper>
          <StyledPrivatelyImageWrapper>
            <StyledPrivatelyImage
              fluid={
                howItAllStartedData.datoCmsAboutMeContent.privatelyImage.fluid
              }
              alt={howItAllStartedData.datoCmsAboutMeContent.privatelyImage.alt}
            />
          </StyledPrivatelyImageWrapper>
          <StyledText
            hasdeclaredfontsize="64px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="bold"
            hasdeclaredpadding="0 0 88px 0"
            as="h3"
          >
            A prywatnie...
          </StyledText>
        </StyledPrivatelyWrapper>
      </div>
    </StyledHowItAllStartedSection>
  )
}

export default HowItAllStarted