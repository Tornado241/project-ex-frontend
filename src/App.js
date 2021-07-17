import React from 'react';
import { withTranslation } from 'react-i18next';
import { Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from './utils/history';
import Layout from './components/Layout';
import { routes } from './Routes';
function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={[...routes].map(item => item.path)} component={Layout} />
      </Switch>
    </Router>
  );
}

export default withTranslation()(App);
