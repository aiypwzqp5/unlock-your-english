import styled from "styled-components"

export const StyledFullPageResponsieImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  img,
  picture {
    object-fit: contain;
  }
`
