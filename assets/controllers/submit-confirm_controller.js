import { Controller } from '@hotwired/stimulus';
import Swal from 'sweetalert2';
import { useDispatch } from 'stimulus-use';

export default class extends Controller {

    static values = {
        title: String,
        text: String,
        icon: String,
        confirmButtonText: String,
        submitAsync: Boolean
    }

    connect() {
        useDispatch(this, { debug: true });
    }
    onSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: this.titleValue || null,
            text: this.textValue || null,
            icon: this.iconValue || null,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.confirmButtonTextValue || 'Yes, delete it!',

            showLoaderOnConfirm: true,
            preConfirm: () => {
                return this.submitForm();
            }
        });

        /*.then((result) => {
            if (result.isConfirmed) {

                //this.element.submit();
                event.target.submit();
            }
        })*/
    }

    async submitForm() {
        // refresh full page
        if (!this.submitAsyncValue) {
            this.element.submit();
            return;
        }

        // Ajax Call
        const response = await fetch(this.element.action, {
            method: this.element.method,
            body: new URLSearchParams(new FormData(this.element))
        })

        this.dispatch('async:submitted', {
            response,
        })
    }
}