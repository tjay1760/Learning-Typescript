import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({
name:{
    type:String,
    required: [true, "Subscription is required"],
    trim:true,
    minLength:2,
    maxLenth:100,
},
price:{
    type: Number,
    required: [true, "Supscription price is required"],
    min: [0, "Price should be more that 0"],
},
currency:{
type : String,
enum: ['USD', 'EUR','GBP'],
default: 'USD'
},
frequency:{
    type: String,
    enum:['Daily','Weekly','Monthly','Yearly']
},
category:{
    type:String,
    enum: ['sports','news','entertainment', 'lifestyle'],
    required: true,
},
paymentMethod:{
type:String,
required: true,
trim: true,
},
status:{
    type: String,
    enum: ['active','cancelled','expired'],
    default: 'active'
},
startDate:{
type: Date,
required: true,
validate:{
    validator: (val)=>val<= new Date(),
    message:"Start date must be in the past"
},
},
renewalDate:{
type: Date,
required: true,
validate:{
    validator: function validator (val){return val> this.startDate},
    message:"Renewal data must be after the start date",
}
},
user:{
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
index:true
}
},{timestamps:true})

subscriptionSchema.pre('save', function(){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }
    this.renewalDate = new Date (this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency])
    }
if(this.renewalDate <new Date()){
    this.status = 'expired'
}
next();
})
const Subscription = mongoose.model('Subscription',subscriptionSchema)