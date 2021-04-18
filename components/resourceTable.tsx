import { Table } from 'semantic-ui-react';
import { Dictionary, Resource } from '../common/types';
import ResourceRow from './resourceRow';
import { map } from 'lodash';

interface ResourceTableProp {
  resourceByName: Dictionary<Resource>;
}

export default function ResourceTable({ resourceByName }: ResourceTableProp) {
  const resourceRows = map(resourceByName, res => {
    return (
      <ResourceRow resource={res}></ResourceRow>
    )
  });

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Bone</Table.HeaderCell>
          <Table.HeaderCell>Organ</Table.HeaderCell>
          <Table.HeaderCell>Hide</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Amount to be consumed</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {resourceRows}
      </Table.Body>
    </Table>
  );
}
