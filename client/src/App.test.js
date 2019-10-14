import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import ReactDOM from 'react-dom';

import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

afterEach(rtl.cleanup);

test('Does app render h1 navbar title?', async () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug(wrapper.queryByText(`Trending Women's World Cup Players`))
})


