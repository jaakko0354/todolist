import { render, screen } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react';

test('add todo', () => {
  render(<App/>);
  const todosbutton = screen.getByText('TODOS');
  fireEvent.click(todosbutton);
  const desc = screen.getByLabelText('Description');
  fireEvent.change(desc, { target : {value: 'Go to work'} } );
  const date = screen.getByLabelText('Date');
  fireEvent.change(date, { target : {value: '01.11.2022'} } );
  const priority = screen.getByLabelText('Priority');
  fireEvent.change(date, { target : {value: 'High'} } );
  const button = screen.getByText('Add');
  fireEvent.click(button);
  const tablecell = screen.getByText(/go to work/i);
  expect(tablecell).toBeInTheDocument();
  const clearButton = screen.getByText('Clear list');
  fireEvent.click(clearButton);
  const returnTest = screen.getByText(/No Rows To Show/i);
  expect(returnTest).toBeInTheDocument();
});
