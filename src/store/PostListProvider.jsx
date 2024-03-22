import { createContext,useReducer } from "react"

 export const PostList = createContext({
    postList:[],
    addPost:() => {},
    deletPost:() => {}


})


const DEFAULT_POST_LIST = [{
    id:"1",
    title:'Going to mumbai',
    body:' hi freiends i going to vacation.Hope to enjoy a lot',
    reaction:'30',
    userId:'user-9',
    tags:["vaction","mumbai","enjoying"]
},
{
    id:"2",
    title:'pass ho gaye',
    body:' hi freiends i going to vacation.Hope to enjoy a lot',
    reaction:'15',
    userId:'user-12',
    tags:["unbelevable","done"]
}
]


const PostListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "Delet_post") { // Corrected action type to match the reducer
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId // Fixed "post.Id" to "post.id"
      );
    }else if(action.type==="add_post") {
        newPostList=[action.payload,...currPostList];

    }
    return newPostList;
  };

const PostListProvider = ({children})=> {
    const [postList,DispatchPostList]=useReducer(PostListReducer,DEFAULT_POST_LIST)

    const addPost= (userId,postTitle,postBody,reactions,tags) => {
       DispatchPostList({
        type:"add_post",
        payload:{
            id:Date.now(),
           title:postTitle,
           body:postBody,
           reaction:reactions,
            userId:userId,
           tags:tags

        }
       })
       
    }
    const deletPost = (postId) => {
    DispatchPostList({
        type:"Delet_post",
        payload:{
            postId,
        },
    })
    }

    return(
        <PostList.Provider value={{postList,addPost,deletPost}}>{children}</PostList.Provider>
    )
}


export default PostListProvider;  


