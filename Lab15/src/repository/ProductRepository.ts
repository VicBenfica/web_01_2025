import { Product } from "../model/Product";
import { executarComandoSQL } from "../database/mysql";




export class ProductRepository {
    private static instance: ProductRepository;
    private productList: Product[] = [];

    private constructor() { }

    public static getInstance(): ProductRepository {
        if (!this.instance) {
            this.instance = new ProductRepository();
        }
        return this.instance;
    }
    deleteProduct(id: number){
        try {
            const query = "DELETE FROM vendas.Product WHERE id = ?";
            const valores = [id];

            executarComandoSQL(query, valores, this.imprimeResult);
            console.log(`Produto com ID ${id} deletado do banco de dados.`);
        } catch (err) {
            console.error('Erro ao deletar o produto:', err);
            if (err instanceof Error) throw err;
        }
    }

   updateProduct(product: Product): void {
    try {
        const query = "UPDATE vendas.Product SET name = ?, price = ? WHERE id = ?";
        const valores = [product.name, product.price, product.id];

        executarComandoSQL(query, valores, this.imprimeResult);
        console.log(`Produto com ID ${product.id} atualizado com sucesso.`);
    } catch (err) {
        console.error('Erro ao atualizar o produto:', err);
        if (err instanceof Error) throw err;
    }
}

    filtraProdutoPorId(id: number): Product | undefined {
        return this.productList.find(product => product.id === id);
    }

    filtraTodosProdutos(): Product[] {
        return this.productList;
    }

    private imprimeResult(err: any, result: any) {
        if (result != undefined) {
            console.log("Dentro callback", result);
        }
    }

    createTable() {
        try {
            const resultado = executarComandoSQL("CREATE TABLE Vendas.Product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)",
                [], this.imprimeResult);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    insereProduto(name: string, price: number) {
        try {
            const resultado = executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price], this.imprimeResult
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            if (err instanceof Error)
                throw err
        }
    }

}