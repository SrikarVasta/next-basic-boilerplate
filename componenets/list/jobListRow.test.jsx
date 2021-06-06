import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import JobListRow from "./jobListRow";

let expectedProps;

beforeAll(() => {
  expectedProps = {
    isFeatured: false,
    title: "test title",
    company: "test company",
    tags: ["tag1", "tag2"],
    locationNames: "Abc Location",
  };
});
afterEach(() => {});
afterAll(() => {});

test("Expect all values to exist", async () => {
  const { getByText } = render(<JobListRow {...expectedProps} />);
  const title = getByText(expectedProps.title);
  const company = getByText(expectedProps.company);

  expect(title).toBeVisible();
  expect(company).toBeVisible();
});

test("Expect Featured tag to be present if isFeatured is true", async () => {
  expectedProps.isFeatured = true;
  const { getByText } = render(<JobListRow {...expectedProps} />);
  const featured = getByText("Featured");
  expect(featured).toBeVisible();
});
