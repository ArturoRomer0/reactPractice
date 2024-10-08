import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPosts from "./NewPosts";


function PostsList() {
const [enteredBody, setEnteredBody] = useState([]);
const [enteredAuthor, setEnteredAuthor] = useState([]);

function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
}

function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
}

  return (
    <>  
        <NewPosts onBodyChange ={changeBodyHandler} onAuthorChange ={changeAuthorHandler}/>
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author={enteredAuthor} body={enteredBody} />
        </ul>
    </>
  );
}

export default PostsList;