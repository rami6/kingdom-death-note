import { Table, Icon, Button } from 'semantic-ui-react';
import { Resource } from '../common/types';
import { includes } from 'lodash';

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
        <Button primary>
          <Icon name="plus" style={{ margin: 0 }} />
        </Button>
        <Button secondary>
          <Icon name="minus" style={{ margin: 0 }} />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
