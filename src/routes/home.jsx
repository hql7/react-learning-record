import State from '@/views/state.jsx';
import MyEvent from '@/views/event.jsx';
import List from '@/views/list.jsx';
import { MyForm, Res } from '@/views/form.jsx';
import Wendu from '@/views/state-up';
import { WelcomeDialog, SlotBox, SingUpDialog } from "@/views/extend"
import TheDemo from "@/views/demo"
import CodeSplit from "@/views/code-split"

const list = [{ name: 'a' }, { name: 'b' }]

function Home() {
  return (
    <div>
      this is Home
      <State />
      <MyEvent />
      <List list={list} />
      <MyForm />
      <Res />
      <Wendu />
      <SlotBox />
      <WelcomeDialog />
      <SingUpDialog />
      <TheDemo />
      <CodeSplit />
    </div>
  );
}

export default Home;
