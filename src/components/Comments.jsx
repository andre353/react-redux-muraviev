import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { createComment } from '../redux/actions';
import SingleComment from './SingleComment';

const Comments = (props) => {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector(state => state.commentsReducer.comments);
  // console.log(comments);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit', textComment);
    const id = uniqid();
    dispatch(createComment(textComment, id));
    setTextComment('');
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" onChange={handleInput} value={textComment} />
        <input type="submit" hidden />
      </form>
      {!!comments.length && comments.map(comment => {
        return <SingleComment key={comment.id} data={comment} />
      })}
    </div>
  )
};

export default Comments;
