import { useContext } from "react";
import Post from "./Post"
import { PostList } from "../store/PostListProvider";

const List = () => {
   const {postList} = useContext(PostList)
    return (<>
    
    {postList.map((post)=>(
      
        <Post key={post.Id} post={post}/>
        
    ))}
    
    </>
)
}
export default List;