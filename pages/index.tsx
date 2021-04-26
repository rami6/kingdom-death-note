import Layout from '../components/layout';
import ResourceTable from '../components/resource-table';
import 'semantic-ui-css/semantic.min.css';
import { resourceByName } from '../common/sample-data';
import { Icon, Button } from 'semantic-ui-react';
import styles from '../styles/index.module.scss';
import AddResourceModal from '../components/add-resource-modal';

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
      <div className={styles.topButtons}>
        <div className={styles.leftButtons}>
          <AddResourceModal />
        </div>
        <div className={styles.rightButtons}>
          <Button primary>Confirm</Button>
          <Button basic icon='undo alternate' color='grey' />
        </div>
      </div>
      <ResourceTable resourceByName={resourceByName} />
      <div className={styles.legend}>
        <span>
          <Icon name='food' />: Consumable
        </span>
        <span>
          <Icon name='github alternate' />: Cat resource
        </span>
      </div>
    </Layout>
  );
}
