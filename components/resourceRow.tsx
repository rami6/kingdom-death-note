import { Table, Icon, Button } from 'semantic-ui-react';
import { Resource } from '../common/types';
import { includes } from 'lodash';
import styles from '../styles/ResourceRow.module.scss';


interface ResourceRowProp {
  resource: Resource;
}

export default function ResourceRow({ resource }: ResourceRowProp) {
  return (
    <Table.Row>
      <Table.Cell>{resource.name}</Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Bone') ? <Icon name="checkmark" /> : ''}
      </Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Organ') ? (
          <Icon name="checkmark" />
        ) : (
          ''
        )}
      </Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Hide') ? <Icon name="checkmark" /> : ''}
      </Table.Cell>
      <Table.Cell>{resource.amount}</Table.Cell>
      <Table.Cell>{resource.amountToBeConsumed}</Table.Cell>
      <Table.Cell>
        <Button primary className={styles.actionButton}>
          <Icon name="plus" className={styles.actionButtonIcon} />
        </Button>
        <Button secondary>
          <Icon name="minus" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
