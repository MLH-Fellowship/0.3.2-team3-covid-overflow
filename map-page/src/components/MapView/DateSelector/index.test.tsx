import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import DateSelector from '.';

import {store} from '../../../context/store';

test('renders as expected', () => {
  const realDateNow = Date.now.bind(global.Date);
  const dateNowStub = jest.fn(() => 1530518207007);
  // eslint-disable-next-line
  global.Date.now = dateNowStub;

  const { container } = render(
    <Provider store={store}>
      <DateSelector />
    </Provider>,
  );
  expect(container).toMatchSnapshot();

  // eslint-disable-next-line
  global.Date.now = realDateNow;
});
