import NavbarSchema from "../Models/Navbar.js";
export const getDatas = async (req, res) => {
  const Designdata = await NavbarSchema.find({});
  res.send(Designdata);
};
export const getData = async (req, res) => {
  const id = req.params.id;
  const Designdata = await NavbarSchema.findById(id);
  res.send(Designdata);
};
export const deleteData = async (req, res) => {
  const id = req.params.id;
  const Designdata = await NavbarSchema.findByIdAndDelete(id);
  res.send(Designdata);
};
export const updateData = async (req, res) => {
  const id = req.params.id;
  const Designdata = await NavbarSchema.findByIdAndUpdate(id, req.body);
  res.send(Designdata);
};
export const postData = async (req, res) => {
  const { logo, links, header,shopify,expiresin,filteredproducts,info,footer } = req.body;

  try {
    const Designdata = new NavbarSchema ({ logo, links, header, shopify,expiresin,filteredproducts,info,footer });
    const savedNavbar = await Designdata.save();;
    res.status(201).json(savedNavbar);
  } catch (error) {
    console.error('Error saving navbar:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
  res.send({ message: "Data added" });
};