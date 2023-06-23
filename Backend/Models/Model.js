let data =[{
    id:1,
    name:"siddhant",
    age:20,
},
{
    id:2,
    name:"rahul",
    age:10,
},
{
    id:3,
    name:"yash",
    age:25,
},
]

const getUserModel = ()=>{
    try {
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
const addUserModel = (body)=>{
    try {
        
        data = [...data,body]
       
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
const editUserModel = (body,params)=>{
    try {
        
        
        console.log(params)
        const user = data.find((ele)=>ele.id === +params.id)
        console.log(user);
        user.name = body.name;
        return data;

    } catch (error) {
        console.log(error.message);
    }
}
const deleteUserModel = (params)=>{
    try {
        
    const updatedData = data.filter((ele)=>ele.id !== +params.id);
    data = [...updatedData];
   
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getUserModel,addUserModel,editUserModel,deleteUserModel};