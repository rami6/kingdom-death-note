import { Table } from 'semantic-ui-react';
import { Dictionary, Resource } from '../common/types';
import ResourceRow from './resourceRow';
import { map } from 'lodash';

interface ResourceTableProp {
  resourceByName: Dictionary<Resource>;
}

export default function ResourceTable({ resourceByName }: ResourceTableProp) {
  const resourceRows = map(resourceByName, (res) => {
    return (
      <ResourceRow
        resource={{ ...res, barance: res.amount, difference: 0 }}
      ></ResourceRow>
    );
  });

  return (
    <Table celled striped structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
          <Table.HeaderCell colSpan='4'>Attributes</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Action</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Diff</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Bone</Table.HeaderCell>
          <Table.HeaderCell>Organ</Table.HeaderCell>
          <Table.HeaderCell>Hide</Table.HeaderCell>
          <Table.HeaderCell>Others</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{resourceRows}</Table.Body>
    </Table>
  );
}
