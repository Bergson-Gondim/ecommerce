class DataBase {
    //Atributos para testar o logon, pois não tem banco de dados
    private nome: string;
    private senha: string;
    private email: string;
    private sexo: boolean; //true: Feminino - false:Masculino
    private cpf: number;
    private endereco: string;
    private telefone: number;


    public setCadastro(nome: string, senha: string, email: string, sexo: boolean, cpf: number, endereco: string, telefone: number): void {

        if (nome == null || senha == null || email == null || sexo == null || cpf == null || endereco == null || telefone == null) {
            throw new CadastroException("Preencha todos os campos");

            console.error("Preencha todos os campos");
        } else {
            //usado temporariamente para testar o login
            this.nome = nome;
            this.senha = senha;
            this.email = email;
            this.sexo = sexo;
            this.cpf = cpf;
            this.endereco = endereco;
            this.telefone = telefone;
            console.log("Cadastro realizado com sucesso");
        }

    }

    //método usado para efetuar o login
    public login(email: string, senha: string) {
        if (email != this.email || senha != this.senha) {
            throw new LoginExpections("Usuario ou senha incorreto")
            console.error("Usuario ou senha incorreto")
        } else {
            console.log("Login efetuado com sucesso");
        }

    }

    //método usado para efetuar a compra
    public Comprar(pedidoProduto: PedidoProduto) {

        console.log("Produto " + pedidoProduto.getProduto().getDescricao);
        console.log("Quantidade: " + pedidoProduto.getQuantidade);

    }
}