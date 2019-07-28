import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import UserListContainer from './containers/UserListContainer'
import './App.css';

function App(){
    return (
        <div className="App">
            <HeaderContainer />
            <UserListContainer />
        </div>
    );
}

export default App;
