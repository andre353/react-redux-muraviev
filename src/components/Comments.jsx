import { useState } from 'react';
import SingleComment from './SingleComment';

const Comments = (props) => {
  const [textComment, setTextComment] = useState('');

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', textComment);
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" onChange={handleInput} value={textComment} />
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  )
};

export default Comments;
