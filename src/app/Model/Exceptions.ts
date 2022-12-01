//tratamento de exceções
//


class CadastroException implements Error {
    name: string = "DadosInvalidos"
    message: string;
    stack?: string | undefined;

    constructor(message: string) {
        this.message = message;
    }
}

class LoginExpections implements Error{
    name: string = "LoginInvalido"
    message: string;
    stack?: string | undefined;

    constructor(message: string) {
        this.message = message;
    }
}