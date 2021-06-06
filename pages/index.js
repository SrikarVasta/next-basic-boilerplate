import styles from "../styles/Home.module.scss";
import client from "../apollo-client";
import JobList from "../componenets/index/jobList";
import Header from "../componenets/layout/header";
import Footer from "../componenets/layout/footer";
import { GET_JOBS } from "../graphql/queries/jobs";

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: GET_JOBS,
      variables: {
        input: {},
      },
    });
    return {
      props: {
        jobs: data?.jobs,
      },
    };
  } catch (e) {
    console.log("error fetching jos:", e);
    return {
      props: {
        jobs: [],
      },
    };
  }
}

export default function Home({ jobs }) {
  return (
    <div className={styles.container}>
      <Header></Header>
      <JobList jobs={jobs.slice(0, 10)} />
      <Footer></Footer>
    </div>
  );
}
