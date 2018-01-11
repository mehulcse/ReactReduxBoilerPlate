import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../InputField';

storiesOf('Input Field', module)
    .add('with input', () => (
        <InputField
            label="Test Label"
            type="text"
            inputFieldClass="input-field-test"
            fieldClass="field-test"
            placeholder="Test Field"
            fieldId="test"
        />
    ))
    .add('without label', () => (
        <InputField
            type="text"
            inputFieldClass="input-field-test"
            fieldClass="field-test"
            placeholder="Test Field"
            fieldId="test"
        />
    ))
    .add('with error', () => (
        <InputField
            type="text"
            inputFieldClass="input-field-test"
            error="Invalid format"
            fieldClass="field-test"
            placeholder="Test Field"
            fieldId="test"
        />
    ))
    .add('with onChange check', () => (
        <InputField
            name="test"
            type="text"
            inputFieldClass="input-field-test"
            fieldClass="field-test"
            placeholder="Test Field"
            fieldId="test"
        />
    ));
