import db from './../../services/sequelize'


const Product=db.Product
export const create=(req,res,next)=>{
    const body=req.body
    Product.create(body).then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(401).send(err)
    })
}