import Validator from "./classes/Validator.ts";

export default function validation() {
    const forms = document.querySelectorAll<HTMLFormElement>('[data-need-validation]');

    forms.forEach(form => {
        const validator = new Validator(form);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            validator.validate();
        })
    })
}
