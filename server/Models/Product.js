import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
      design:[{
      productsec:[{
        image:{type:String},
        title:{type:String}
      }],
      salesec:[{
        image:{type:String},
        title:{type:String},
        subtitle:{type:String},
        btn:{type:String}
      }]
      }],
      allproducts:[{
        
          categoryName:{type:String},
          productlar:[{
            productName: { type: String, required: true },
             images:[{type:String}],
              oldprice:{type:String},
              about:{type:String},
              discountRate:{type:String},
              newprice:{type:String,required:true},
          }]
        
      }]
      },
      { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);