import PostPageMobile from './Components/postPageMobile';
import Navbar from './Navbar';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PostPageMobile />
    </div>
  );
}

export default App;
