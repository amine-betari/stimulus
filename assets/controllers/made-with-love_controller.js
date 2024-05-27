import { Controller } from '@hotwired/stimulus';
// import ReactDom from  'react-dom';
import React from  'react';
import MadeWithLove from '../components/MadeWithLove';

export default class extends Controller {
    connect() {
        console.log('❤️');
        import('react-dom').then((ReactDOM) => {
            ReactDom.default.render(
                <MadeWithLove />,
                this.element
            )
        });
    }
}
