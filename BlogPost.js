import React from 'react';
import axios from 'axios';

class BlogPost extends React.Component{
    state={posts:[]};

componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then((res)=>{

const posts=res.data;
console.log(posts)
this.setState({posts});
   })
    
}

render(){
    
    return <div className="ui field">
        <ol><h1>Posts</h1>{this.state.posts.map((post)=>(
            
            <li key={post.id}>
                
               <h3> {post.title}</h3>
            </li>
        ))}</ol>
    </div>
}
}

export default BlogPost;