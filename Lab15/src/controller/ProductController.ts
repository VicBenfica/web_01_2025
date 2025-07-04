import { ProductService } from "../service/ProductService";
import { Request, Response } from "express";

export class ProductController {
    private productService = new ProductService();

    cadastrarProduto(req: Request, res: Response) {
        try {
            this.productService.createProduct(req.body);
            res.status(201).json({ message: 'Produto criado com sucesso!!' });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Erro ao criar o produto.';
            res.status(400).json({ message });
        }
    }

    deletarProduto(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({ message: "ID inválido!" });
                return;
            }

            this.productService.deleteProduct(id);
            res.status(200).json({ message: `Produto com ID ${id} deletado com sucesso.` });
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Erro ao deletar o produto.';
            res.status(500).json({ message });
        }
    }

    atualizarProduto(req:Request, res:Response){
        try{
            this.productService.updateProduct(req.body);
            res.status(200).json({message:"Produto atualizado com sucesso!"});

        }catch(err){
            const message = err instanceof Error ? err.message: "Erro ao atualizar o produto";
            res.status(400).json({message});
        }
    }

    filtraProdutoPorId(req: Request, res: Response): void {
        try {
            const id = Number(req.params.id);

            const product = this.productService.filtraProdutoPorId(id)
            res.status(201).json(product)
        } catch (error: unknown) {
            let message: string = "Não foi possível filtrar por ID!!"
            if (error instanceof Error) {
                message = error.message
            }
            res.status(400).json({
                message: message
            })
        }
    }
    filtraTodosProdutos(req: Request, res: Response): void {
        try {
            const product = this.productService.filtraTodosProdutos()
            res.status(201).json(product)
        } catch (error: unknown) {
            let message: string = "Não foi possível listar!!"
            if (error instanceof Error) {
                message = error.message
            }
            res.status(400).json({
                message: message
            });
        }
    }
}
