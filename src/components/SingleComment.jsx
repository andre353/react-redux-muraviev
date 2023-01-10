import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment, deleteComment } from '../redux/actions';

const SingleComment = ({data: {text, id}}) => {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateComment(commentText, id));

  };

  const handleDelete = (e) => {
    dispatch(deleteComment(id));
  };

  return (
    <form className="comments-item" onSubmit={handleUpdate} >
      <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  )
};

export default SingleComment;
