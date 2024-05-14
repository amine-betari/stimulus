import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["button", "message"];

    connect() {
        console.log("Le contrôleur est connecté !");

        // Accéder à la cible du bouton et ajouter un écouteur d'événements
        this.buttonTarget.addEventListener("click", () => {
            this.toggleMessage();
        });
    }

    toggleMessage() {
        // Accéder à la cible du message et modifier son contenu
        this.messageTarget.textContent = "Bonjour, le monde!";
    }
}
