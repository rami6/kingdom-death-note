import { Table, Icon, Button } from 'semantic-ui-react';
import { Resource } from '../common/types';
import { includes } from 'lodash';
import styles from '../styles/ResourceRow.module.scss';


interface ResourceRowProp {
  resource: ResourceRow;
}

interface ResourceRow extends Resource {
  balance: number;
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
        <button className='ui icon button action-button'>
          <i aria-hidden='true' className='plus icon'></i>
        </button>
        <span className={styles.balance}>{resource.balance}</span>
        <button className='ui icon button action-button'>
          <i aria-hidden='true' className='minus icon'></i>
        </button>
      </Table.Cell>
      <Table.Cell>{resource.difference}</Table.Cell>
    </Table.Row>
  );
}
