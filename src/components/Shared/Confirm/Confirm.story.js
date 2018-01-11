import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Confirm from './index';

storiesOf('Confirm box', module).add('with input', () => (
    <Confirm
        onOk={action('on save')}
        onCancel={action('on cancel')}
        text="Are you sure you want to delete this iteam? This is irreversable!"
    />
));
