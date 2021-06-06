import React from "react";
import SearchInput from "../inputs/searchInput";
import JobListRow from "../list/jobListRow";
import BannerSections from "../sections/bannerSection";

export default function JobList({ jobs }) {
  return (
    <div>
      <BannerSections>
        <h2>Work with GraphQL in a modern startup.</h2>
        <div className="container">
          <SearchInput type="text" label="search" />
        </div>
      </BannerSections>

      {jobs &&
        jobs.map((job, index) => (
          <JobListRow
            key={`job-${index}`}
            isFeatured={job.isFeatured}
            title={job.title}
            company={job?.company?.name}
            tags={job.tags.length ? job.tags.map((e) => e.name) : []}
            locationNames={job.locationNames ?? "Remote"}
          ></JobListRow>
        ))}
    </div>
  );
}
