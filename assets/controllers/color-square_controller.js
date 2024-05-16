import { Controller } from '@hotwired/stimulus';

export default class  extends Controller {

    static targets = ['colorSquare', 'select'];
    static values = {
        colorId: Number
    }

    connect() {
     //   this.selectTarget.classList.add('d-none');
        // Concept of Api Values
        console.log(this.colorIdValue);

        // See colorIdValueChanged()
        /*if(this.colorIdValue) {
            this.setSelectedColor(this.colorIdValue);
        }*/
    }

    colorIdValueChanged(){
        // this.setSelectedColor(this.colorIdValue);
        this.selectTarget.value = this.colorIdValue;

        this.colorSquareTargets.forEach((element) => {
            if (element.dataset.colorId == this.colorIdValue) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        });
    }
    selectColor(event) {
        //this.setSelectedColor(event.currentTarget.dataset.colorId);
        const clickedColor = event.currentTarget.dataset.colorId;

//        this.colorIdValue = event.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;

    }

}