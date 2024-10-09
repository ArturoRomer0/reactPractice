import { useState } from "react";

import Post from "./Post";
import NewPosts from "./NewPosts";
import Modal from "./Modal";
import classes from "./PostsList.module.css";


function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
    
    {modalIsVisible && (
      <Modal onClose={hideModalHandler}>
        <NewPosts
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />  
      </Modal>
    )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;