import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grpc client text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello gRPC/i);
  expect(linkElement).toBeInTheDocument();
});
