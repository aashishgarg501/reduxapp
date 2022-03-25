import Inc from "./IncDec/IncDic";
import Store from "./Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Inc />
      </Provider>
    </>
  );
};

export default App;
