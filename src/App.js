
// 引入菜单组件
import Menu from "@/components/menu"
// 引入路由组件
import Routes from "@/routes/index"

function App() {
  return (
    <div className="App">
      <Menu className="the-menu" />
      <div className="The-context">
        <Routes />
      </div>
    </div>
  );
}

export default App;
