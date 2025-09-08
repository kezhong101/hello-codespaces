import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'
import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
  title: 'Hello Second Post!',
  author: 'John Doe',
  contents: 'This post is new.',
  tags: ['mongoose', 'mongodb'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
