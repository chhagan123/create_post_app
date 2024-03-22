
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Fotter from './components/Fotter'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'


import List from './components/List'
import { useState } from 'react'
import PostListProvider from './store/PostListProvider'


function App() {
  const [selectedTab,setselectedTab]=useState("Home")


  return(
  <>
  <PostListProvider>
  <div className="app-container">
  <Sidebar
  selectedTab={selectedTab}
  setselectedTab={setselectedTab}
  ></Sidebar>
  <div className="content"> 
    <Header></Header>
  {selectedTab==="Home" ?(<List></List>):( <CreatePost></CreatePost>) }
 <Fotter></Fotter>
</div>
 
  </div>
  </PostListProvider>
   
  </>
    )
}

export default App;


