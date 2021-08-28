import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, DragAndDropGroupedBlocks, DragAndDropTableColumns } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/drag-and-drop-grouped-blocks'>
          <DragAndDropGroupedBlocks />
        </Route>
        <Route exact path='/drag-and-drop-grouped-columns'>
          <DragAndDropTableColumns />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
