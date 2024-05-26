import { Controller } from '@hotwired/stimulus';
import ReactDom from  'react-dom';
import React from  'react';
import FeaturedProduct from '../components/FeaturedProduct';

export default class extends Controller {

    static values = {
        product: Object
    }

    connect() {
        ReactDom.render(
            <FeaturedProduct product={this.productValue} />,
            this.element
        )
    }
}
