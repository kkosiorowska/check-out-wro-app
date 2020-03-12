import React from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from'./App.css';
import Layout from './hoc/Layout/Layout';
import MainContent from './containers/MainContent/MainContent';
import Auth from './containers/Auth/Auth';

function App() {
  return (
      <div className={classes.App}>
          <Layout>
              <Switch>
                  <Route path="/" component={MainContent} exact />
                  {/* <Route path="/auth" component={Auth} />
                  <Route path="/attractions" component={MainContent} /> */}
              </Switch>
          </Layout>
      </div>
  );
}

export default App;
