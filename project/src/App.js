import logo from './logo.svg';
import './App.css';
import Card from "./Card";
function App() {
  return (
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </section>
  );
}

export default App;
