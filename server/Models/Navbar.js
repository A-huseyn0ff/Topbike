import mongoose from "mongoose";

const NavbarSchema = new mongoose.Schema(
    {
      logo: {
        type: String,
      },
      links: [
        {
          text: {
            type: String,
            required: true,
          },
          url: {
            type: String
          },
          hot:{
            type:String
          }
        },
      ],
    header: [{
      image:{
type:String
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      btn:{
        type:String
      }
    }
    ],
    shopify: [{
      image:{
type:String
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      }
    }
    ],
    expiresin: [{
      image:{
type:String
      },
      expiredate:{
type:String
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      promocode:{
        type:String
      },
      btn:{
        type:String
      }
    }
    ],
    filteredproducts: [{
      image:{
type:String
      },
     
      title: {
        type: String,
      }
      
    }
    ],
    info: [
      {
      image:{
type:String
      },
     
      title: {
        type: String,
      },
      subtitle:{
        type:String
      },
      date:[{
        type:String
      }],
      news:{
        type:String
      },
      btn:{
        type:String
      },
      tags:{
        type:String
      },
      about:{
        type:String
      }
    }
    ],
    footer:[
      {
logopart:[{
  logo:{
    type:String
},
parag:{
  type:String
},
      
      }],
      nav:[{
        title:{
          type:String
        },
        navigate:[{
          type:String
        }]
      }]
    }
  ]
  },
{ timestamps: true }
);

export default mongoose.model("navbar", NavbarSchema);