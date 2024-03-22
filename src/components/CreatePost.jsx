import { useContext,useRef } from "react";
import { PostList } from "../store/PostListProvider";

const CreatePost = () => {

const {addPost} =useContext(PostList)

const userIdElement = useRef();
const postTitleElement= useRef();
const postBodyElement = useRef();
const reactionElement = useRef();
const tagsElement = useRef();

const handleSubmit =(event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionElement.current.value;
  const tags = tagsElement.current.value.split(" ")

  addPost(userId,postTitle,postBody,reactions,tags);
  

}
 
return (
    <form className="create_post" onSubmit={handleSubmit} >
 <div className="mb-3">
    <label htmlFor="userId" className="form-label">user Id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="title" placeholder=" user id " />
    
 </div>



  <div className="mb-3">
    <label htmlFor="postTitle" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="how are you felling today... " />
    
 </div>

 <div className="mb-3">
    <label htmlFor="postBody" className="form-label">Post content</label>
    <textarea type="text"  ref={postBodyElement} className="form-control" id="title" placeholder="tell us more about it. "/>
    
 </div>

 <div className="mb-3">
    <label htmlFor="reactions" className="form-label">reaction</label>
    <input type="text" ref={ reactionElement} className="form-control" id="title" placeholder=" number of reaction " />
    
 </div>

 <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtag here</label>
    <input type="text" ref={tagsElement} className="form-control" id="title" placeholder=" please enter tags using space " />
    
 </div>




 

 
  <button   type="submit" className="btn btn-primary">Post</button>
</form>
  
)
}

export default CreatePost