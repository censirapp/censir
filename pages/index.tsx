import { Logo, Inputs, Pill } from "../components";
import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <div>
      <LeftContainer>
        <Logo />
        <InputContainer>
          <Pill />
          <Title>Check the weather</Title>
          <Inputs />
        </InputContainer>
      </LeftContainer>
    </div>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 20px;
  font-weight: 300;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const InputContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
