import Layout from '../components/layout';
import ResourceTable from '../components/resourceTable';
import 'semantic-ui-css/semantic.min.css';
import { resourceByName } from '../common/sample-data';

export async function getStaticProps() {
  return {
    props: {
      resourceByName,
    },
  };
}

export default function Home({ resourceByName }) {
  return (
    <Layout pageTitle="Resource Tracker">
      <ResourceTable resourceByName={resourceByName}></ResourceTable>
    </Layout>
  );
}
