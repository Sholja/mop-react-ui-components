import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf, forceReRender } from '@storybook/react';

import DefaultSelect from './default-select';

const options = [
  {
    value: 1,
    text: 'First Option',
  },
  {
    value: 2,
    text: 'Second Option',
  },
  {
    value: 3,
    text: 'Third Option',
  },
];

const store = new Store({
  value: options[2].value,
});

const onChange = e => {
  store.set({ value: e.target.value });
  forceReRender();
};

storiesOf('DefaultSelect', module)
  .add(
    'Basic',
    () => (
      <State store={store}>
        <DefaultSelect
          name="storybook"
          meta={{ touched: false, error: '', invalid: false }}
          label="Storybook input"
          options={options}
          value={3}
          input={{
            onChange,
          }}
        />
      </State>
    ),
    {
      notes: 'Pretty simple select dropdown.',
    },
  )
  .add(
    'Text input with error',
    () => (
      <State store={store}>
        <DefaultSelect
          name="storybook"
          meta={{ touched: true, error: 'Please select one of the values.', invalid: true }}
          label="Storybook input"
          placeholder="This select has an error."
          options={options}
          input={{
            onChange,
          }}
        />
      </State>
    ),
    {
      notes:
        'Select dropdown displaying validation error. To be displayed, component expects prop error as string to be passed.',
    },
  );
