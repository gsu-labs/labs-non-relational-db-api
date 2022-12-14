import { NextFunction, Request, Response } from 'express';
import { Product } from '@interfaces/product.interface';
import ProductService from '@services/product.service';

class ProductController {
    public productService = new ProductService();

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllProductsData: Product[] = await this.productService.findAllProducts();

            res.status(200).json({ data: findAllProductsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId: string = req.params.id;
            const findOneProductData: Product = await this.productService.findProductById(productId);

            res.status(200).json({ data: findOneProductData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productData: Product = req.body;
            const createProductData: Product = await this.productService.createProduct(productData);

            res.status(201).json({ data: createProductData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId: string = req.params.id;
            const productData: Product = req.body;
            const updateProductData: Product = await this.productService.updateProduct(productId, productData);

            res.status(200).json({ data: updateProductData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId: string = req.params.id;
            const deleteProductData: Product = await this.productService.deleteProduct(productId);

            res.status(200).json({ data: deleteProductData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getProductsByPrice = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const maxPrice: number = +req.params.max;
            const findProductsData: Product[] = await this.productService.findProductsByPrice(maxPrice);

            res.status(200).json({ data: findProductsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getProductsBySearch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const name: string = req.params.name;
            const findProductsData: Product[] = await this.productService.search(name);

            res.status(200).json({ data: findProductsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getProductsSortByAmount = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllProductsData: Product[] = await this.productService.findAllProductsSortByAmount();

            res.status(200).json({ data: findAllProductsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default ProductController;
