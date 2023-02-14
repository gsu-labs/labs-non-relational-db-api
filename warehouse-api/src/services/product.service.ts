import { HttpException } from '@exceptions/HttpException';
import { Product } from '@interfaces/product.interface';
import productModel from '@models/product.model';
import { isEmpty } from '@utils/util';

class ProductService {
    public products = productModel;

    public async findAllProducts(): Promise<Product[]> {
        const productes: Product[] = await this.products.find();
        return productes;
    }

    public async findProductById(productId: string): Promise<Product> {
        if (isEmpty(productId)) throw new HttpException(400, 'ProductId is empty');

        const findProduct: Product = await this.products.findOne({ _id: productId });
        if (!findProduct) throw new HttpException(409, 'Product doesn\'t exist');

        return findProduct;
    }

    public async createProduct(productData: Product): Promise<Product> {
        if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

        const createProductData: Product = await this.products.create({ ...productData });
        return createProductData;
    }

    public async updateProduct(productId: string, productData: Product): Promise<Product> {
        if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

        const updateProductById: Product = await this.products.findByIdAndUpdate(productId, { ...productData });
        if (!updateProductById) throw new HttpException(409, 'Product doesn\'t exist');

        return updateProductById;
    }

    public async deleteProduct(productId: string): Promise<Product> {
        const deleteProductById: Product = await this.products.findByIdAndDelete(productId);
        if (!deleteProductById) throw new HttpException(409, 'Product doesn\'t exist');

        return deleteProductById;
    }

    public async findProductsByPrice(maxPrice: number): Promise<Product[]> {
        if (isEmpty(maxPrice)) throw new HttpException(400, 'Product price is empty');

        const findProducts: Product[] = await this.products.find({ price: { $lt: maxPrice } });
        if (!findProducts) throw new HttpException(409, 'Products doesn\'t exist');

        return findProducts;
    }

    public async search(name: string): Promise<Product[]> {
        if (isEmpty(name)) throw new HttpException(400, 'Destination is empty');

        const findProducts: Product[] = await this.products.find({ name: { '$regex': name, '$options': 'i' } });
        if (!findProducts) throw new HttpException(409, 'Products doesn\'t exist');

        return findProducts;
    }

    public async findAllProductsSortByAmount(): Promise<Product[]> {
        const products: Product[] = await this.products.find().sort({ amount: 1 });
        return products;
    }
}

export default ProductService;
