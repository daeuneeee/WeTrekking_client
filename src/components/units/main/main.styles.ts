import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/media";

const ScrollAnimation = keyframes`
  0% {
   bottom: -2.2rem;
  }
  100% {
   bottom: -4rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  scrollbar-width: none;
  .Navigation {
    a {
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  padding-bottom: 10rem;
  img {
    width: 100%;
    @media ${mobile} {
      width: 70%;
    }
  }
`;

export const MainText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #fff;
`;

export const CrewFindBtn = styled.button`
  width: 16rem;
  height: 5.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  border: none;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 4px;
  cursor: pointer;
`;

export const ScrollBox = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const ScrollText = styled.p`
  color: white;
`;

export const ScrollIcon = styled.img`
  width: 3.7rem;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${ScrollAnimation} 0.8s 1s infinite linear;
`;
