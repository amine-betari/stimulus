import { Controller } from 'stimulus';
export default class extends Controller {

    static values = {
        cartRefreshUrl: String,
    }
    connect() {
        console.log('🛒');
    }

    async removeItem(event) {
        console.log(event.currentTarget);
        console.log(event.target);
        console.log(this.element);

        event.currentTarget.classList.add('removing');

        const response = await fetch(this.cartRefreshUrlValue);
        this.element.innerHTML = await response.text();
    }
}