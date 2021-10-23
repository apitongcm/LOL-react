import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Query from './component/Query';
import Title from './component/Title';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Title/>
        <Query/>
        <h1 items-center>Hello world</h1>
    </div>
  );
}

export default App;
