class Cliente {
    //Atributos
    private nome: string;
    private senha: string;
    private email: string;
    private sexo: boolean; //true: Feminino - false:Masculino
    private cpf: number;
    private endereco: string;
    private telefone: number;

    //Método construtor
    constructor(nome: string, senha: string, email: string, sexo: boolean, cpf: number, endereco: string, telefone: number) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.sexo = sexo;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }


    //Métodos
    public cadastrar() {
        //cadastrando produto e tratando exceções
        try {
            let dataBase: DataBase = new DataBase();
            dataBase.setCadastro(this.nome, this.senha, this.email, this.sexo, this.cpf, this.endereco, this.telefone);
        } catch (erroCadastro) {
            if (erroCadastro instanceof CadastroException) {
                throw erroCadastro;
            }
        }
    }

    public login(): void {
        //logando e tratando exceções
        try {
            let login: DataBase = new DataBase();
            login.login(this.nome, this.senha);
        } catch (erroLogin) {
            if (erroLogin instanceof LoginExpections) {
                throw erroLogin;
            }
        }
    }


}