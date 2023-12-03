import { styled } from "styled-components";

export const MainContainer = styled.main`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const TitleDiv = styled.div`
  width: 100%;
  background-color: #000;
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  padding: 10px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #242424;
  min-height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FormBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const FormGroup = styled.div`
  min-width: 300px;
  padding: 10px;
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  background-color: #00a9ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0077b3;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-top: 8px;
  padding: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    transition: 0.2s;
    background-color: #4d4d4d;
  }
`;

export const CarsContainer = styled.div`
  background-color: #242424;
  min-height: 420px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 40rem;
  backdrop-filter: blur(1px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 22px;
  font-weight: bold;
`;

export const ListContainer = styled.div`
  border-top: solid #0d1117;
  border-width: 1px 0;
  max-height: 315px;
  overflow-y: scroll;
`;
