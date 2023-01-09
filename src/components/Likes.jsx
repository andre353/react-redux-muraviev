import {connect} from 'react-redux'

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
    onIncrementLikes: () => { // станет доступным в компоненте Likes через props
      console.log('click');
      const action = {type: 'INCREMENT'};
      dispatch(action); // так мы получаем наш action в reducer в store.js
    },
    onDecrementLikes: () => { // станет доступным в компоненте Likes через props
      console.log('click decrement');
      const action = {type: 'DECREMENT'};
      dispatch(action); // так мы получаем наш action в reducer в store.js
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
