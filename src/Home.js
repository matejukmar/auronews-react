import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(setPosts)
  }, [])

  return (
    <div className="page">
      <h1>Auroville News</h1>
      {
        posts.map((post) => {
          return <Article key={post.id} post={post} another='matej' />
        })
      }
      <img src={require('./assets/matej.jpg')} width="200" alt="Matej" />
    </div>
  );
}

async function fetchData(setPosts) {
  try {
    const response = await fetch('http://localhost:3002/posts')
    const posts = await response.json()
    setPosts(posts)
  } catch (error) {
    console.log('on no', error)
  }
}

function Article({ post, another }) {
  return (
    <div className="article">
      <h3><Link to={"post/" + post.id}>{post.title}</Link></h3>
      <div className="date">Date: {post.dateStart}</div>
      <div className="date"><Link to={'/update-post/' + post.id}>Edit</Link></div>
    </div>
  )
}

export default Home;
