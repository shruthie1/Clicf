import { css } from '@emotion/react';

// Function to generate a random light color
const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

// CSS for the tab links
export const tabLinkStyles = (length) => css`
  display: block;
  width: calc(100% / ${length});
  padding: 15px;
  text-align: center;
  color: #333;
  text-decoration: none;
  background-color: ${generateRandomColor()};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
