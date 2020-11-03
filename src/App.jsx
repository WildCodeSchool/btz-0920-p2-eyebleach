import PostPageMobile from './Components/postPageMobile';
import BodyHP from './Components/BodyHP';
import Main from './Components/Main';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <PostPageMobile />
      <BodyHP />
    </div>
  );
}

export default App;
