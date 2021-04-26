import { Button, Modal, Form } from 'semantic-ui-react';
import React from 'react';
import styles from '../styles/add-resource-modal.module.scss';


export default function AddResourceModal() {
  const [open, setOpen] = React.useState(false);

  const resInfoFieldSet = (i: number) => (
    <div key={i} className={styles.resourceFieldSet}>
      <Form.Input placeholder='Resource Name' width='16' />
      <Form.Group inline widths='16'>
        <Form.Checkbox label='Bone' />
        <Form.Checkbox label='Organ' />
        <Form.Checkbox label='Hide' />
        <Form.Checkbox label='Consumable' />
        <Form.Checkbox label='Cat Resource' />
      </Form.Group>
    </div>
  );

  const [resInfoFieldSets, setResInfoFieldSets] = React.useState([resInfoFieldSet(0)]);

  const addFieldSet = () => setResInfoFieldSets((prevState) => [...prevState, resInfoFieldSet(prevState.length)]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button circular icon='plus' color='yellow' />}
    >
      <Modal.Header>Add new resources</Modal.Header>
      <Modal.Content>
        <Form>{resInfoFieldSets}</Form>
        <Button onClick={addFieldSet}>Add Fields</Button>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='grey' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          color='yellow'
          content='Add'
          icon='checkmark'
          labelPosition='right'
        />
      </Modal.Actions>
    </Modal>
  );
}
