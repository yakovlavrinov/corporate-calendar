import Router from 'express'
import PostController from './PostController.js';

const router = new Router()
const {create, getAll, getOne, update, deletePost} = PostController

router.post('/posts', create)
router.get('/posts', getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', update)
router.delete('/posts/:id', deletePost)

export default router