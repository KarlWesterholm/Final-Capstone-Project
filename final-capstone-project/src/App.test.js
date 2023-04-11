import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm.js';

test('changes date variable to May 4th, 2023', () => {
  render(<BookingForm />);

  // Click date selector
  fireEvent.click(screen.getByLabelText('Choose time'));

  // Type in date
  fireEvent.click(screen.getByDisplayValue('20:00'));

  expect(time).toHaveValue("20:00");
});
