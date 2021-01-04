// Validación de formulario
class FormValidator2{
    constructor(form2, fields2){
        this.form2 = form2;
        this.fields2 = fields2;
    }

    initialize(){
        this.validateOnSubmit();
        this.validateOnEntry();
    }

    validateOnSubmit(){  
        let self = this;
        this.form2.addEventListener("submit", e => {
            e.preventDefault();
            
            let errors = false;

            self.fields2.forEach(field => {
                const input = document.querySelector(`#${field}`);
                errors = self.validateFields(input);

                if(!errors){
                    window.location.href = 'new_order.html'
                }
            });
        }); 
    }

    validateOnEntry(){
        let self = this;
        this.fields2.forEach(field => {
            const input = document.querySelector(`#${field}`);
            input.addEventListener('keydown', event => {
                self.validateFields(input, event);
            });
        });        
    }

    validateFields(field, event){

        let errors = false; 

        if(field.value.trim() === ""){
            this.setStatus(field, 
                `${field.previousElementSibling.innerText} no puede estar en blanco.`, "error");
                errors = true;
        }else{
            this.setStatus(field, null, "success");
        }
        
        if (field.type === "email"){
            const re_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
            
            if (re_email.test(field.value)){
                this.setStatus(field, null, "success");
            } else {
                this.setStatus(field, "Ingresa un correo válido.", "error");
                errors = true;
            } 
        }

        if (field.type === "text"){
            const re_text = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

            if (re_text.test(field.value)){
                this.setStatus(field, null, "success");
            }else {
                this.setStatus(field, "Solo puedes ingresar caracteres alfabéticos.", "error")
                errors = true;
            }
        }

        if (field.type === "password"){
            const passwordField = field.value.length;
            if(passwordField > 8) {
                this.setStatus(field, null, "success");
            }else{
                this.setStatus(field, "La contraseña debe contener mínimo 8 caracteres.", "error");
                errors = true;
            }
        }

        if (field.type === "tel"){
            const re_number = /^[0-9]{1,10}$/g;
            const re_only_number = /[^0-9]+/gi;

            if (re_number.test(field.value) || event.key === "Backspace"){
                this.setStatus(field, null, "success");
            }else if(re_only_number.test(event.key)){
                this.setStatus(field, "Solo ingresa números.", "error");
                event.preventDefault();
                errors = true;
            }
        }

        return errors;

    }

    setStatus(field, message, status){
        const successIcon = field.parentElement.querySelector('.icon-success');
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessage = field.parentElement.querySelector('.error-message');

        if (status === "success"){
            if (errorIcon){
                errorIcon.classList.add('hidden');
            }
            if (errorMessage){
                errorMessage.innerText = "";
            }
            successIcon.classList.remove('hidden');
        }

        if (status === "error"){
            if (successIcon){
                successIcon.classList.add('hidden');
            }
            errorMessage.innerText = message;
            errorIcon.classList.remove('hidden'); 
        }
    }
}

const form2 = document.querySelector('.sign-up-form');
const fields2 = ["name", "email2", "password2", "phone"];

const validator2 = new FormValidator2(form2, fields2);

validator2.initialize();