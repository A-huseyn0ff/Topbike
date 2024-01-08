import ProductSchema from "../Models/Product.js";
export const getAll = async (req, res) => {
  const Productdata = await ProductSchema.find({});
  res.send(Productdata);
};


export const getProduct = async (req, res) => {
  const id = req.params.id;
  const Productdata = await ProductSchema.findById(id);
  res.send(Productdata);
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const Productdata = await ProductSchema.findByIdAndDelete(id);
  res.send(Productdata);
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const Productdata = await ProductSchema.findByIdAndUpdate(id, req.body);
  res.send(Productdata);
};
export const postProduct = async (req, res) => {
  try {
    const { design,allproducts }=req.body
    const Productdata = new ProductSchema({ design,allproducts });
    const save=await Productdata.save();
    res.status(201).json(save);
  } catch (error) {
    console.error('Error saving navbar:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  res.send({ message: "Product added" });
};

export const getProductlarById = async (req, res) => {
  const productId = req.params.id;

  try {
    const Productdata = await ProductSchema.findOne({ 'allproducts.productlar._id': productId });

    if (!Productdata) {
      return res.status(404).json({ message: 'Product not found' });
    }

    
    let productlarArray;
    Productdata.allproducts.forEach((category) => {
      const product = category.productlar.find((item) => item._id == productId);
      if (product) {
        productlarArray = category.productlar;
      }
    });

    if (!productlarArray) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(productlarArray);
  } catch (error) {
    console.error('Error fetching productlar array:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

