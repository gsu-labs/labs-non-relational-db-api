import { Router } from 'express';
import ProductController from '@controllers/product.controller';
import { Routes } from '@interfaces/routes.interface';

class ProductRoute implements Routes {
    public path = '/product';
    public router = Router();
    public productController = new ProductController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.productController.getProducts);
        this.router.get(`${this.path}/:id`, this.productController.getProductById);
        this.router.post(`${this.path}`, this.productController.createProduct);
        this.router.put(`${this.path}/:id`, this.productController.updateProduct);
        this.router.delete(`${this.path}/:id`, this.productController.deleteProduct);
        this.router.get(`${this.path}/price/:max`, this.productController.getProductsByPrice);
        this.router.get(`${this.path}/search/:name`, this.productController.getProductsBySearch);
        this.router.get(`${this.path}/sort/amount`, this.productController.getProductsSortByAmount);
    }
}

export default ProductRoute;
