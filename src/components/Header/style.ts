import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 15px;
  background-color: #4ec5f1;
  display: flex;
  place-content: space-around;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex: 1;
  place-content: center;
`;

export const SearchInput = styled.input`
  border: 1px solid #000;
  border-radius: 30px 0 0 30px;
  width: 50%;
  outline: none;
  padding: 2px 10px;
`;

export const StyledBtn = styled.button`
  border: 1px solid #000;
  border-radius: 0 30px 30px 0;
  background-color: #fff;
  cursor: pointer;
`;
