// Validación de formulario
class FormValidator{
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
    }

    initialize(){
        this.validateOnSubmit();
        this.validateOnEntry();
    }

    validateOnSubmit(){  
        let self = this;
        this.form.addEventListener("submit", e => {
            e.preventDefault();

            let errors = false;
            
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`);
                errors = self.validateFields(input);

                if(!errors){
                    window.location.href = 'order.html'
                }
            });
        }); 
    }

    validateOnEntry(){
        let self = this;
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`);
            input.addEventListener('input', event => {
                self.validateFields(input);
            });
        });        
    }

    validateFields(field){

        let errors = false; 

        if(field.value.trim() === ""){
            this.setStatus(field, 
                `${field.previousElementSibling.innerText} no puede estar en blanco.`, "error")
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

const form = document.querySelector('.sign-in-form');
const fields = ["email1", "password1"];

const validator = new FormValidator(form, fields);

validator.initialize();