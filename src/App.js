import { Provider } from 'react-redux'
import store from './reduxCycle/store';
import RouterProvider from './navigation/RouterProvider';


function App() {
  return (
      <Provider store={store}>
            <RouterProvider/>
      </Provider>
  );
}

export default App;
