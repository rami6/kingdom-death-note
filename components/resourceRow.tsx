import { Table, Icon, Button } from 'semantic-ui-react';
import { Resource } from '../common/types';
import { includes } from 'lodash';
import styles from '../styles/ResourceRow.module.scss';


interface ResourceRowProp {
  resource: ResourceRow;
}

interface ResourceRow extends Resource {
  barance: number;
  difference: number;
}

export default function ResourceRow({ resource }: ResourceRowProp) {
  return (
    <Table.Row textAlign='center'>
      <Table.Cell textAlign='left'>{resource.name}</Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Bone') ? <Icon name='checkmark' /> : ''}
      </Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Organ') ? (
          <Icon name='checkmark' />
        ) : (
          ''
        )}
      </Table.Cell>
      <Table.Cell>
        {includes(resource.attributes, 'Hide') ? <Icon name='checkmark' /> : ''}
      </Table.Cell>
      <Table.Cell>
        {resource.isCatRes ? <Icon name='github alternate' /> : ''}
        {resource.isConsumable ? <Icon name='food' /> : ''}
      </Table.Cell>
      <Table.Cell>
        <Button primary className={styles.actionButton}>
          <Icon name='plus' className={styles.actionButtonIcon} />
        </Button>
        <span>{resource.barance}</span>
        <Button secondary>
          <Icon name='minus' />
        </Button>
      </Table.Cell>
      <Table.Cell>{resource.difference}</Table.Cell>
    </Table.Row>
  );
}
