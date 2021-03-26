
import { BrowserRouter } from "react-router-dom"
// 引入菜单组件
import Menu from "@/components/menu"
// 引入路由组件
import Routes from "@/routes/index"
// 引入样式
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="The-context" id="The-context">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
