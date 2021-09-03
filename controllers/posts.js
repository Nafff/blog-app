import Post from '../models/post'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).send(error.message)
  }
}