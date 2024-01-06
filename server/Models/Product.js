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
          products:[{
            productName: { type: String, required: true },
             images:[{type:String}],
              oldprice:{type:String},
              about:{type:String},
              discountRate:{type:String},
              newprice:{type:String,required:true},
          }]
        
      }]
      //   bicycles:[{
      //     productName: { type: String, required: true },
      //  images:[{type:String}],
      //   oldprice:{type:String},
      //   about:{type:String},
      //   discountRate:{type:String},
      //   newprice:{type:String,required:true},
      //   category:[{type:String}]
      //   }],
      //   BikeAccessories:[{
      //     productName: { type: String, required: true },
      //  images:[{type:String}],
      //   oldprice:{type:String},
      //   about:{type:String},
      //   discountRate:{type:String},
      //   newprice:{type:String,required:true},
      //   category:[{type:String}]
      //   }],
      //   Helmet:[{
      //     productName: { type: String, required: true },
      //  images:[{type:String}],
      //   oldprice:{type:String},
      //   about:{type:String},
      //   discountRate:{type:String},
      //   newprice:{type:String,required:true},
      //   category:[{type:String}]
      //   }]
      },
      { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);