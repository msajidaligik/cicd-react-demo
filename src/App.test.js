import { render, screen } from '@testing-library/react';
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test("renders heading", () => {
  render(<App />);
  expect(screen.getByText(/CI\/CD Demo/i)).toBeInTheDocument();
});

test("renders button", () => {
  render(<App />);
  expect(screen.getByText(/Increment/i)).toBeInTheDocument();
});
