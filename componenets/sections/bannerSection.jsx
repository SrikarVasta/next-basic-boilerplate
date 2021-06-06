import React from "react";
import styled from "styled-components";

const BannerSections = styled.section`
  width: 100%;
  background: linear-gradient(to right, #e78ef3, #edd95e);
  overflow-x: hidden;
  position: relative;
  width: 100%;
  min-height: calc(350px + (100 * ((100vw - 320px) / 1280)));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 90%;
  }
  h2 {
    width: 30vw;
    text-align: center;
  }
`;

export default BannerSections;
