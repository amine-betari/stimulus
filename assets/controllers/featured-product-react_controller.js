import { Controller } from '@hotwired/stimulus';
// import ReactDom from  'react-dom';
import React from  'react';
import FeaturedProduct from '../components/FeaturedProduct';

export default class extends Controller {

    static values = {
        product: Object
    }

    connect() {
        import('react-dom').then((ReactDOM) => {
            // async o r dynamic import
            // This allows Webpack to isolate the react-dom code into its own file.
            // Then, that code won't be downloaded until this import line is executed
            ReactDOM.default.render(
                <FeaturedProduct product={this.productValue} />,
                this.element
            )
        })
    }
}
