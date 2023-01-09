import { useSelector, useDispatch } from "react-redux"; // вместо mapStateToProps и mapDispatchToProps
import { inputText } from "../redux/actions";

const Title = (props) => {
  const title = useSelector(state => state.inputReducer.text);
  console.log(title);
  console.log('props title', props);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log('handle text >>', e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default Title
