import { Request, Response } from 'express';

const products = [
  { id: 1, name: 'shirt' },
  { id: 2, name: 'pants' },
  { id: 3, name: 'bag' },
  { id: 4, name: 'shoes' },
];

// get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: 'products not found' });
  }
};

// post product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await req.body;
    products.push(newProduct);
    return res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: 'product cannot be created' });
  }
};

// put product
export const editProductInfo = async (req: Request, res: Response) => {
  try {
    const editProduct = await req.body;
    const index = products.findIndex((prod) => prod.id === editProduct.id);

    if (index !== -1) {
      products[index] = editProduct;
      return res.status(200).json(products);
    } else {
      return res.json('cant find the product by this id');
    }
  } catch (err) {
    res.status(404).json({ message: 'product cannot be edited' });
  }
};

// delete product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const newProdArray = products.filter((prod) => prod.id.toString() !== id);
    res.status(200).json(newProdArray);
  } catch (err) {
    res.status(404).json({ message: 'product cannot be deleted' });
  }
};
