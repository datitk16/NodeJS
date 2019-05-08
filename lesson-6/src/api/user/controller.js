import db from './../../services/sequelize'


const User=db.User
export const create=(req,res,next)=>{
    const body=req.body
    User.create(body).then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(401).send(err)
    })
}