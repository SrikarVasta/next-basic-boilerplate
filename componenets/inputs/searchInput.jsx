import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputText = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: calc(8.4px + (2.4 * ((100vw - 320px) / 1280)));
  background-color: #fbfcfe;
  border-radius: 8px 0 0 8px;
  max-width: calc(420px + (120 * ((100vw - 320px) / 1280)));
  border: none;
  height: calc(49px + (14 * ((100vw - 320px) / 1280)));
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
  height: 66px;
  font-size: calc(18.2px + (5.2 * ((100vw - 320px) / 1280)));
  line-height: calc(32.2px + (5.2 * ((100vw - 320px) / 1280)));
`;

const SearchButton = styled.a`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  padding: calc(14px + (4 * ((100vw - 320px) / 1280)))
    calc(28px + (8 * ((100vw - 320px) / 1280)));
  font-size: calc(18.2px + (5.2 * ((100vw - 320px) / 1280)));
  border-radius: 0 8px 8px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
  max-width: calc(350px + (100 * ((100vw - 320px) / 1280)));
  cursor: pointer;
  height: calc(49px + (14 * ((100vw - 320px) / 1280)));
  height: 68px;
  line-height: calc(32.2px + (5.2 * ((100vw - 320px) / 1280)));
`;

export default function searchInput({ onChange, onClick, label }) {
  return (
    <SearchWrapper>
      <SearchInputText onChange={onChange} disabled />
      <SearchButton onClick={onClick}>{label}</SearchButton>
    </SearchWrapper>
  );
}
