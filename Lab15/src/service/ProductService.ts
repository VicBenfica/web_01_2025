import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    private productRepository = ProductRepository.getInstance();

    createProduct(data: any) {
        if (!data.name || !data.price) {
            throw new Error('Favor informar os campos obrigatórios');
        }
        this.productRepository.insereProduto(data.name, data.price);
    }

    deleteProduct(id: number): void {
        this.productRepository.deleteProduct(id);
        console.log("Produto deletado com sucesso.");
    }
    updateProduct(data:any):void{
        if(!data.id || !data.name || !data.price){
            throw new Error("Favor informar os campos obrigatório: id, name e price.");
        }

        const product = new Product(data.id, data.name, data.price);
        this.productRepository.updateProduct(product);
    }

    filtraProdutoPorId(id: number) {
        return this.productRepository.filtraProdutoPorId(id);
    }
    filtraTodosProdutos(): Product[] {
        return this.productRepository.filtraTodosProdutos();
    }

}
