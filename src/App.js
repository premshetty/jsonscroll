
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeConatiner';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './Redux/Store';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        {/* <HooksCakeContainer />
     <IceCreamContainer />
     <NewCakeContainer />
     <CakeContainer />
     <ItemContainer  cake/> */}
        
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
