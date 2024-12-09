import ValidMethods from "./Validation";
export default class ValidationService {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }
    CheckEmptyValue() {
        var error = [];
        if (!ValidMethods.checkIsEntered(this.password)) {
            error['password'] = "Введите пароль";
        }
        if (!ValidMethods.checkIsEntered(this.email)) {
            error['email'] = "Введите почту";
        }
        return error;
    }
    CheckValidations() {
        var error = [];
        if (!ValidMethods.checkEmail(this.email)) {
            error['ex'] = 'Введите правильно почтовый адрес';
        }
        if (!ValidMethods.checkPasswordLenght(this.password, 3)) {
            error['ex'] = 'Неверная длинна пароля';
        }
        return error;
    }
}