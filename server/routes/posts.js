import express from 'express';
import { getPosts } from '../controller/posts.route.js';

const router = express.Router();

router.get('/', getPosts);

export default router;