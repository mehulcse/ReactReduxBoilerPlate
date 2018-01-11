import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Shared/Input', module).add('to Storybook', () => (
    <Input
        type="text"
        id="email"
        required
        IconUrl={require('assets/images/envelope.png')}
        name="email"
        placeholder="Enter Email Adddress"
        className="email"
        emptyMessage="Field required!!!"
        errorMessage="email id not valid!!!"
    />
));
