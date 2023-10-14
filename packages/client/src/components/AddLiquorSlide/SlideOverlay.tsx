import React from 'react';
import styled from 'styled-components';

const StyledSlideOverlay = styled.div<{
  $display: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  opacity: 0.5;
  display: ${props => (props.$display ? 'block' : 'none')};
  z-index: 5;
`;

type SlideOverlayType = {
  display: boolean;
  onClick: () => void;
};

const SlideOverlay: React.FC<SlideOverlayType> = ({ display, onClick }: SlideOverlayType) => {
  return <StyledSlideOverlay $display={display} onClick={onClick} />;
};

export default SlideOverlay;
