import proudactModel from "../../../DB/model/Proudact.model.js";
import userModel from "../../../DB/model/User.model.js";

export const allUsers = async (req, res) => {
    const { userName, email, password } = req.body;
    const users = await userModel.findAll({
        include: {
            model: proudactModel,
            attributes:['titel','descration']
        },
        userName, email, password
    })
    return res.json({ messages: `userSuccess Done`, users })
};

export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const add = await userModel.create({ userName, email, password });
    
        return res.json({ messages: `addUsers Done`, add });
    }
    catch (error) {
        if (error.original.errno == 1062) {
               return res.json({message :`email In Valid (must be unique)....`})
           }

        return res.json({ messages: `catch Error`,error });

    }
}
export const login = async (req, res) => {
   // console.log({email,password});
        const { email, password } = req.body;
        const userLogin = await userModel.findAll({
            where: {
                email,
                password
            },
            attributes:['userName' ,'id','password']
        })
    
    if (!userLogin.length) {
     return   res.json({messag:`email is not vaild `})
    }
    if (userLogin[0].password !=password) {
      return  res.json({messag:`password is not vaild `})

    }
    return res.json({ message: `login Has done`, userLogin })
}

export const update = async (req, res) => {
    const { userName, email ,password } = req.body;
    const { id } = req.params;
    //console.log({ id , email });
    const userUpdate = await  userModel.update( {userName,email, password}, {
  where:{
    id
  }
    })
return  userUpdate[0]? res.json({messaage:`update User done`,userUpdate}):res.json({messaage:` update User faild`})
}


export const usersDelete = async (req, res) => {
    const { id } = req.params;
    console.log({ id });
    const user = await userModel.destroy({
        where: {
            id,
        }
     })

   return user ? res.json({message:'users deleted sucsses'}):res.json({message:'user in valid Id'})

    
}
