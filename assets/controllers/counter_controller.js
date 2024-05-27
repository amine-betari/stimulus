import { Controller } from '@hotwired/stimulus';
// import $ from 'jquery';

export default class  extends Controller {
    count = 0;
    static targets = ['count'];
    // connect() {
    //     this.count = 0;
    //
    //     // Use actions concept
    //     /*this.element.addEventListener('click', () => {
    //         this.count++;
    //         this.countTarget.innerText = this.count;
    //     });*/
    //
    //
    //     // this.element.innerHTML = 'You have clicked me 0 times :(';
    //     let count = 0;
    //     // Use target concept
    //     // const counterNumberElement = this.element.getElementsByClassName('counter-count')[0];
    //     // With target system we do not need find the element anymore
    //
    //     $(this.element).on('click', function() {
    //         count++;
    //        // $(this).html('You have clicked me ' + count + ' times :)');
    //         // counterNumberElement.innerHTML = count;
    //         // this.countTarget.innerText = count;
    //     });
    // }

    increment() {
        this.count++;
        this.countTarget.innerText = this.count;
    }
}