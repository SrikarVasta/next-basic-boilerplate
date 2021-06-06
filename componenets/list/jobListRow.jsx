import React from "react";
import styled from "styled-components";
import SuperTag from "../labels/superTag";
import Heading from "../labels/heading";
import SubText from "../labels/subText";
import Slug from "../labels/slug";
import Label from "../labels/label";

const ListWrapper = styled.a`
  font-family: inherit;
  font-weight: inherit;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border: 0;
  outline: 0;
  text-transform: none;
  box-sizing: border-box;
  min-height: 0;
  display: block;
  padding-bottom: calc(13px + 0.3125vw);
  margin: 5px 0;
  padding: 30px 20px;
  &.featured {
    background-color: rgb(240, 245, 255);
    &:hover {
      background-color: rgb(152, 191, 255);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (min-width: 1023px) {
      width: 80%;
      margin: auto;
    }
    .col-12 {
      width: 100%;
    }
    .col-8 {
      width: 75%;
    }
    .col-4 {
      width: 25%;
    }
  }
`;

export default function JobListRow({
  isFeatured,
  title,
  company,
  tags,
  locationNames,
}) {
  return (
    <ListWrapper className={isFeatured ? "featured" : ""}>
      <div className="row">
        <div className="col-12">
          {isFeatured && <SuperTag>Featured</SuperTag>}
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-8">
              <Heading>{title}</Heading>
              <SubText>{company}</SubText>
            </div>
            <div className="col-4">
              {tags.map((tag, index) => (
                <Slug key={`tag=${index}`}>{tag}</Slug>
              ))}
            </div>
          </div>
        </div>
        <div className="col-4">{locationNames}</div>
      </div>
    </ListWrapper>
  );
}
