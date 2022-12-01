class Produto {
    private codigo: number;
    private descricao: string;
    private fichaTecnica: string;
    private preco: number;


    constructor(codigo: number, descricao: string, fichaTecnica: string, preco: number) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.fichaTecnica = fichaTecnica;
        this.preco = preco;
    }


    public getCodigo(): number {
        return this.codigo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getFichaTecnica(): string {
        return this.fichaTecnica;
    }

    public getPrego(): number {
        return this.preco;
    }
}