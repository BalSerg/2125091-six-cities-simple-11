import Main from '../../pages/main/main';
import offers from '../../index';
function App(): JSX.Element {
  return <Main offersLength = {offers.length} />;
}

export default App;
