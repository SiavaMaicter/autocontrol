export default class ValidMethods {
    static checkEmail(email) {
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return (true)
            }
            return (false)
        }
    }
    static checkIsEntered(data) {
        if (data) {
            // console.log(322);
            return true;
        }
        // console.log(222);
        return false;
    }
    static checkPasswordLenght(pass, leng) {
        if (pass.length > leng) {
            return true;
        }
        return false;
    }
}