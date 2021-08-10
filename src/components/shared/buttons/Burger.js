import { useState } from "react";
import styled, { css } from "styled-components";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <StyledButton
          borderRadius={borderRadius}
          barHeight={barHeight}
          size={size}
          onClick={() => setIsOpen(!isOpen)}
        >
          <StyledBar
            isFirst
            isOpen={isOpen}
            barMove={barMove}
          />
          <StyledMiddleBar>
            <StyledFloatingBar 
              isFirst
              isOpen={isOpen}
            />
            <StyledFloatingBar 
              isOpen={isOpen}
            />
          </StyledMiddleBar>
          <StyledBar
            isOpen={isOpen}
            barMove={barMove}
          />
        </StyledButton>
    );
  };
  
export default Burger;

const size = 200;
const barHeight = size / 10;
const borderRadius = size / 10;
const barMove = size / 4;
const transition = "0.4s";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  padding: 1rem 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  & span {
    height: ${p => p.barHeight}px;
    border-radius: ${p => p.borderRadius}px;
  }
  
`;

const normalBar = css`
  display: block;
  width: 200px;
  border-radius: ${p => p.borderRadius};
  background: #00D9FF;
  transition-property: opacity, transform;
  transition-duration: ${transition};
`;

const StyledBar = styled.span`
  ${normalBar};
  opacity: ${p => p.isOpen ? 0 : 1};
  transform: translateY(
    ${p =>
      p.isOpen
        ? p.isFirst
        ? `${p.barMove}px`
        : `-${p.barMove}px`
        : 0});
`;

const StyledFloatingBar = styled.span`
  ${normalBar};
  position: absolute;
  z-index: 1;
  height: 100%;
  transition: transform ${transition};
  transform-origin: 50%;
  transform: rotate(
    ${p =>
      p.isOpen
        ? p.isFirst
        ? "-45deg"
        : "45deg"
        : 0
      });
`;

const StyledMiddleBar = styled.span`
  display: block;
  position: relative;
`;
