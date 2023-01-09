import {connect} from 'react-redux'
import { decrementLikes, incrementLikes } from '../redux/actions';

const Likes = (props) => {
  console.log('render >', props);
  return (
    <div>
      <div className="button-controls">
        <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
        <button onClick={props.onDecrementLikes}>Dislike</button>
      </div>
    </div>
  )
};
// так мы получаем доступ к state хранилища redux
const mapStateToProps = (state) => {
  console.log('mapStateToProps >', state);
  const {likesReducer} = state;
  return {
    likes: likesReducer.likes // станет доступным в компоненте Likes через props
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // станет доступным в компоненте Likes через props
    onIncrementLikes: () => dispatch(incrementLikes()), // так мы получаем наш action в reducer в store.js    
    onDecrementLikes: () => dispatch(decrementLikes()), // так мы получаем наш action в reducer в store.js
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
