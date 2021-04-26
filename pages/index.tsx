import Layout from '../components/layout';
import ResourceTable from '../components/resource-table';
import 'semantic-ui-css/semantic.min.css';
import { resourceByName } from '../common/sample-data';
import { Icon, Button } from 'semantic-ui-react';
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
      <div className={styles.topButtons}>
        <div className={styles.leftButtons}>
          <Button circular basic icon='plus' color='red' />
        </div>
        <div className={styles.rightButtons}>
          <Button primary>Confirm</Button>
          <Button secondary icon='undo alternate' />
        </div>
      </div>
      <ResourceTable resourceByName={resourceByName}></ResourceTable>
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
