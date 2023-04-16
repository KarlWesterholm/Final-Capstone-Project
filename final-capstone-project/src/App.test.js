import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './components/BookingPage.js';

test('Renders the BookingPage heading', () => {
  render(<BookingPage times={["17:00"]}/>);
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
});
