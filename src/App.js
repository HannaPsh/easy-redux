import './App.css';
import { increase } from './actions';
import { decreace } from './actions';
import { toLoggIn } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const loggedIn = useSelector((state) => state.logIn);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="App">Counter {count}</div>
      <button onClick={() => dispatch(increase(2))}>+</button>
      <button onClick={() => dispatch(decreace(2))}>-</button>
      <button onClick={() => dispatch(toLoggIn())}>Logg In</button>
      {loggedIn ? <div>Information seen only if you are logged in</div> : ''}
    </div>
  );
}

export default App;
