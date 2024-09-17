import UserModel  from "../db.js";

export const getAllEmp = async(req,res) =>{
    try{
       const user =await UserModel.findAll();
       console.log(user,'user-data')
       if(user.length==0){
          return res.status(200).json({"error":"users not found"})
       }
       return res.status(200).json(users)
    }
    catch(error){
       console.log(error)
    }
}

export const addEmp = async(req,res)=> {
   const {data} = req.body
   try{
      const user =await UserModel.findOne({
         where:{empId:empId}
      })

      if(user == null){
         await UserModel.create(req.body)
      }
      console.log(user,'user-data')
      return res.status(200).json({message:"employee added successfully"})
   }
   catch(error){
      console.log(error)
   }
}