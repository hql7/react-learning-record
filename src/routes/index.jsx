import { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
const Demo = lazy(() => import('@/views/demo'))
const CodeSplit = lazy(() => import('@/views/code-split'))
const Event = lazy(() => import('@/views/event'))
const Extend = lazy(() => import('@/views/extend'))
const Form = lazy(() => import('@/views/form'))
const HelloWord = lazy(() => import('@/views/hello-word'))
const List = lazy(() => import('@/views/list'))
const StateUp = lazy(() => import('@/views/state-up'))
const State = lazy(() => import('@/views/state'))
const Context = lazy(() => import('@/views/context'))

function Routes() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        {/* <Redirect from="/" to="/hello-word" /> */}
        <Route path="/hello-word" component={HelloWord} />
        <Route path="/state" component={State} />
        <Route path="/event" component={Event} />
        <Route path="/list" component={List} />
        <Route path="/form" component={Form} />
        <Route path="/state-up" component={StateUp} />
        <Route path="/extend" component={Extend} />
        <Route path="/demo" component={Demo} />
        <Route path="/code-split" component={CodeSplit} />
        <Route path="/context" component={Context} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
