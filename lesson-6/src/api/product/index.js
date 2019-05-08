import { Router } from 'express'
import { create} from './controller'
const router = new Router()
router.get('/', (req,res)=>{

})
router.get('/:id', (req,res)=>{
    
})
router.post('/', create)
router.put('/:id', (req,res)=>{
    
})
router.delete('/:id', (req,res)=>{
    
})

export default router