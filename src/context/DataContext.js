import { Children, createContext ,useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import api from '../api/posts'
const DataContext =  createContext({});

export const DataProvider = ({children}) =>{

    const[search,setSearch] = useState('')
    const[searchResults,setSearchResults] = useState('')
    const[postTitle,setPostTitle] = useState('')
    const[postBody,setPostBody] = useState('')
    const navigate = useNavigate()
    const[posts,setPosts] = useState([])
  
    async function handleSubmit(e){
      e.preventDefault();
      const id = posts.length? Number(posts[posts.length-1].id) +1:1;
      const newPost = {id,title:postTitle,body:postBody};
      try{
        const response =  await api.post('/posts',newPost)
        const allPosts = [...posts,response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/')
      }
      catch(err){
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
        }
        else{
          console.log(`Error :${err.message}`);
        }
      }
  
    }
  
    useEffect(() => {
      const filteredResults = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    }, [posts, search]);
  
    useEffect(()=>{
        const fetchPosts = async()=>{
          try{
          const response = await api.get('/posts');
          const postsData = response.data.map(post => ({
            ...post,
            id: Number(post.id), // Ensure `id` is a number
        }));
          setPosts(postsData);
          }
          catch(err){
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
            }
            else{
              console.log(`Error :${err.message}`);
            }
          }
        }
        fetchPosts()
    },[])
  
    async function handleDelete(id) {
      const numericId = Number(id);
      try {
          await api.delete(`/posts/${numericId}`);
          const postsList = posts.filter(post => post.id !== id);
          setPosts(postsList);
          navigate('/');
      } catch (err) {
          if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
          } else {
              console.log(`Error: ${err.message}`);
          }
      }
  }

    return (
        <DataContext.Provider value={{search,setSearch,postTitle,setPostTitle,postBody,setPostBody,handleSubmit,posts,handleDelete,searchResults}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext