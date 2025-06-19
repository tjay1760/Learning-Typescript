const errorMiddleware = (err,req,res,next) =>{
    try{
let error = {...err}
error.message = err.message
console.error(err)
// Mongoose Bad ID
if(err.name==='CastError'){
    const message = 'Resource not Found';
    error = new Error(message);
    error.statusCode = 404;
}
//Mongoose Duplicate Key
if (err.code ===11000){
    const message = 'Duplicate key entered'
    error = new Error(message);
    error.statusCode = 400;
}
// Mongoose validation Error
if(err.name ==='ValidationError'){
const message = 'Duplicate key entered'
    error = new Error(message.join(', '));
    error.statusCode = 400;
}
res.status(error.statusCode|| 500).json({success:false,error:error.message|| 'Server error'})
    } catch (error){
next(error);
    }

}
export default errorMiddleware;