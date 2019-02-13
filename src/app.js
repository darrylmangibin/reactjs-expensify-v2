import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashBoardPage = () => {
    return (
        <div>
            This is from dashboard component
        </div>
    );
}

const AddExpensePage = () => {
    return (
        <div>
            This is from add expense component
        </div>
    );
}
const EditExpensePage = () => {
    return (
        <div>
            This is from edit expense component
        </div>
    );
}
const HelpPage = () => {
    return (
        <div>
            This is from help expense component
        </div>
    );
}
const NotFoundPage = () => {
    return (
        <div>
            404!
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
}


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector('#app'));
