class PedidoProduto {
    private produto: Produto;
    private quantidade: number;

    public setProduto(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public getProduto(): Produto {
        return this.produto;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

}