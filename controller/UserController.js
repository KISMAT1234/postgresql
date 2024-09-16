export const getAllEmp = async(req,res) =>{
    try{
       const user =await createUserModel.findAll();
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