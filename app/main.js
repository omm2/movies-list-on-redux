import React from 'react';

import './sass/main.scss';

import Hello from './components/component.jsx';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}
