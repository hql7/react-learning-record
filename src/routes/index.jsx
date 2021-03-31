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
const ErrorBoundaries = lazy(() => import('@/views/error-boundaries'))
const ForwardingRefs = lazy(() => import('@/views/forwarding-refs/index'))
const Fragments = lazy(() => import('@/views/fragments/index'))
const Higher = lazy(() => import('@/views/higher/index'))
const IntegrationC = lazy(() => import('@/views/integration-c/index'))
const InDepthJsx = lazy(() => import('@/views/in-depth-JSX/index'))
const OptimizingPerformance = lazy(() => import('@/views/optimizing-performance/index'))
const Portals = lazy(() => import('@/views/portals/index'))
const Profiler = lazy(() => import('@/views/profiler/index'))
const RefsDOM = lazy(() => import('@/views/refs-dom/index'))
const RenderProps = lazy(() => import('@/views/render-props/index'))
const StrictMode = lazy(() => import('@/views/strict-mode/index'))
const PropTypes = lazy(() => import('@/views/prop-types/index'))
const UncontrolledComponents = lazy(() => import('@/views/uncontrolled-components/index'))
const IntroducingHook = lazy(() => import('@/views/introducing-hook/index'))
const HooksOverview = lazy(() => import('@/views/hooks-overview/index'))
const HookState = lazy(() => import('@/views/hook-state/index'))
const HooksEffect = lazy(() => import('@/views/hooks-effect/index'))
const HooksRules = lazy(() => import('@/views/hooks-rules/index'))
const TodoList = lazy(() => import('@/views/todo-list/index'))
const Tictactoe = lazy(() => import('@/views/tictactoe/index'))
const PublishSubscribe = lazy(() => import('@/views/publish-subscribe/index'))
const ReduxView = lazy(() => import('@/views/redux-view/index'))

function Routes() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route path='/' exact render={() => <Redirect to="/hello-word" />}></Route>
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
        <Route path="/error-boundaries" component={ErrorBoundaries} />
        <Route path="/forwarding-refs" component={ForwardingRefs} />
        <Route path="/fragments" component={Fragments} />
        <Route path="/higher" component={Higher} />
        <Route path="/integration-c" component={IntegrationC} />
        <Route path="/in-depth-JSX" component={InDepthJsx} />
        <Route path="/optimizing-performance" component={OptimizingPerformance} />
        <Route path="/portals" component={Portals} />
        <Route path="/profiler" component={Profiler} />
        <Route path="/refs-dom" component={RefsDOM} />
        <Route path="/render-props" component={RenderProps} />
        <Route path="/strict-mode" component={StrictMode} />
        <Route path="/prop-types" component={PropTypes} />
        <Route path="/uncontrolled-components" component={UncontrolledComponents} />
        <Route path="/introducing-hook" component={IntroducingHook} />
        <Route path="/hooks-overview" component={HooksOverview} />
        <Route path="/hook-state" component={HookState} />
        <Route path="/hooks-effect" component={HooksEffect} />
        <Route path="/hooks-rules" component={HooksRules} />
        <Route path="/todo-list" component={TodoList} />
        <Route path="/tictactoe" component={Tictactoe} />
        <Route path="/publish-subscribe" component={PublishSubscribe} />
        <Route path="/redux-view" component={ReduxView} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
