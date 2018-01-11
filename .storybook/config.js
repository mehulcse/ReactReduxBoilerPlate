import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

function loadStories() {
    const req = require.context('../src', true, /\.story\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
