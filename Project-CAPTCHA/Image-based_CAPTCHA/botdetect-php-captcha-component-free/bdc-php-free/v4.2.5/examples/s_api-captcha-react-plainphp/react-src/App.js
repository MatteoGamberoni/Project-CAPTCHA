import React from 'react';
import { HashRouter } from 'react-router-dom'
import PageLayout from './PageLayout.jsx';


class App extends React.Component {

  render() {
    return (<HashRouter><PageLayout /></HashRouter>);
  }
}

export default App;
