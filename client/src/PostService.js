import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {

    // get posts
    static getPosts() {
        return axios.get(url).then(res => {
            const data = res.data;
            return data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }))
        })
        .catch(err => {
            return err
        })
    }

    // create post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService;