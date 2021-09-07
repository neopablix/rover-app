import React from 'react';
import '@testing-library/jest-dom/matchers';
import { render, screen, cleanup } from '@testing-library/react';

// for the test
import Navbar, { INavbarProps } from './index';

const mockedProps: INavbarProps = {
  current: 'spirit',
  setCurrent: jest.fn(),
};

afterEach(cleanup);

describe('Testing <Navbar />', () => {
  it('should renders the Navar properly', () => {
    render(
      <Navbar
        current={mockedProps.current}
        setCurrent={mockedProps.setCurrent}
      />
    );
    expect(screen.getByText('Spirit')).toBeInTheDocument();
  });

  it('should trigger a setCurrent function when clicked', () => {
    render(
      <Navbar
        current={mockedProps.current}
        setCurrent={mockedProps.setCurrent}
      />
    );
    const menuItem = screen.getByText('Curiosity');
    menuItem.click();

    expect(mockedProps.setCurrent).toHaveBeenCalledTimes(1);
  });
});
