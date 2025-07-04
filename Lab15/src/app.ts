import express from "express";
import { ProductController } from "./controller/ProductController";

const app = express();
const productController = new ProductController();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Rota para cadastrar produto
app.post("/api/produto", productController.cadastrarProduto.bind(productController));

//  Rota para atualizar produto
app.put("/api/produto", productController.atualizarProduto.bind(productController));
//FiltrarTodos
app.get("/api/produto", productController.filtraTodosProdutos.bind(productController));
//FiltrarPorID
app.get("/api/produto", productController.filtraProdutoPorId.bind(productController));
//deletar
app.delete("/api/produto", productController.deletarProduto.bind(productController));


app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
