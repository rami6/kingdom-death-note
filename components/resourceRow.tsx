import { Table, Icon, Button } from 'semantic-ui-react';
import { Resource } from '../common/types';
import { includes } from 'lodash';
import styles from '../styles/ResourceRow.module.scss';
import { useState } from 'react';

interface ResourceRowProp {
  resource: Resource;
}

export default function ResourceRow({ resource }: ResourceRowProp) {
  const [amountInfo, setAmountInfo] = useState({
    balance: resource.amount,
    diff: 0,
  });

  function addResource() {
    return setAmountInfo((prevState) => ({
      balance: prevState.balance + 1,
      diff: prevState.diff + 1,
    }));
  }

  function subtractResource() {
    return setAmountInfo((prevState) => ({
      balance: prevState.balance - 1,
      diff: prevState.diff - 1,
    }));
  }

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
        <button className='ui icon button action-button' onClick={addResource}>
          <i aria-hidden='true' className='plus icon'></i>
        </button>
        <span className={styles.balance}>{amountInfo.balance}</span>
        <button
          className='ui icon button action-button'
          onClick={subtractResource}
          disabled={!amountInfo.balance}
        >
          <i aria-hidden='true' className='minus icon'></i>
        </button>
      </Table.Cell>
      <Table.Cell>
        {amountInfo.diff > 0 ? '+' : ''}
        {amountInfo.diff === 0 ? '-' : amountInfo.diff}
      </Table.Cell>
    </Table.Row>
  );
}
