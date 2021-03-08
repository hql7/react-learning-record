import './App.css';
import logo from './logo.svg'
import Ele from './views/demo.jsx'
import State from './views/state.jsx';
import MyEvent from './views/event.jsx';
import List from './views/list.jsx';
import { MyForm, Res } from './views/form.jsx';
import Wendu from './views/state-up';
import { WelcomeDialog, SlotBox, SingUpDialog } from "./views/extend"

const auther = {
  url: logo,
  name: 'lilei'
}
const list = [{ name: 'a' }, { name: 'b' }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Ele auther={auther} text="this is a demo" date="2021.03.03"></Ele>
        <State />
        <MyEvent />
        <List list={list} />
        <MyForm />
        <Res />
        <Wendu />
        <SlotBox />
        <WelcomeDialog />
        <SingUpDialog />
      </header>
    </div>
  );
}

export default App;
