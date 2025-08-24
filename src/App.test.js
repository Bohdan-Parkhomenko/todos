import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

test('renders TodoList link on initial language selection page', () => {
  render(
    <MemoryRouter initialEntries={['/en']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/TodoList/i)).toBeInTheDocument();
});
