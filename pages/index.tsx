import Layout from '../components/layout';
import ResourceTable from '../components/resourceTable';
import 'semantic-ui-css/semantic.min.css';
import { resourceByName } from '../common/sample-data';
import { Icon } from 'semantic-ui-react';
import styles from '../styles/index.module.scss';

export async function getStaticProps() {
  return {
    props: {
      resourceByName,
    },
  };
}

export default function Home({ resourceByName }) {
  return (
    <Layout pageTitle='Resource Tracker'>
      <div className={styles.legend}>
        <span>
          <Icon name='food' />: Consumable
        </span>
        <span>
          <Icon name='github alternate' />: Cat resource
        </span>
      </div>
      <ResourceTable resourceByName={resourceByName}></ResourceTable>
    </Layout>
  );
}
