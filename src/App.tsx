import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableFooter from './components/TableFooter';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Library Showcase</h1>

      <h2>Button</h2>
      <Button label="Default Button" />
      <Button label="Disabled Button" disabled />

      <h2>Label</h2>
      <Label text="This is a label" />

      <h2>Text</h2>
      <Text content="This is a text component" />

      <h2>Table</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <h2>Dropdown</h2>
      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
      />

      <h2>Radio Button</h2>
      <RadioButton name="example" value="1" checked={false} onChange={() => {}} />

      <h2>Image</h2>
      <Img src="https://via.placeholder.com/150" alt="Placeholder" />

      <h2>Hero Image</h2>
      <HeroImage
        src="https://via.placeholder.com/800x400"
        alt="Hero"
        title="Hero Title"
        description="This is a hero image description."
      />

      <h2>Card</h2>
      <Card title="Card Title" content="This is the card content." footer="Card Footer" />
    </div>
  );
}

export default App;
