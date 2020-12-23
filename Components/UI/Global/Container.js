import styled, { css } from '@emotion/native';

const Container = styled.View`
    ${({ flex }) => flex && `
    flex: ${flex};
  `}
    ${({ bg }) => bg && `
    background-color: ${bg};
  `}
    ${({ width }) => width && `
    width: ${width};
  `}
    ${({ height }) => height && `
    height: ${height};
  `}
    ${({ direction }) => direction && `
    flex-direction: ${direction};
  `}
    ${({ justify }) => justify && `
    justify-content: ${justify};
  `}
   ${({ alignitems }) => alignitems && `
    align-items: ${alignitems};
  `}
   ${({ padding }) => padding && `
    padding: ${padding}px;
  `}
  `;



export default Container;