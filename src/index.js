import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor';
import Home from './Home';
import './index.css';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home}/>
	  	<Route path="/autor" component={AutorBox}/>
	  	<Route path="/livro"/>
  	</Route>
  </Router>),
  document.getElementById('root')
);
