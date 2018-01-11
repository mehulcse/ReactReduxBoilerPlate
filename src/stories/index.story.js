import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { Button, Welcome } from '@storybook/react/demo';
import './story.scss';

storiesOf('Default Examples/Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Default Examples/Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .addDecorator(withKnobs)
    .add(
        'with dynamic text',
        withNotes('You can update text from knobs tab -> Label value')(() => (
            <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>
        ))
    )
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="">
                😀 😎 👍 💯
            </span>
        </Button>
    ));
