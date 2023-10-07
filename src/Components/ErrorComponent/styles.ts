import styled from "styled-components";

export const ErrorMessage = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  background-color: #e74c3c;
  color: white;
  padding: 4px;
  max-width: 280px;
  border: 2px solid darkred;
  border-radius: 6px;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;
`;
