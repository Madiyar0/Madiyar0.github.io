import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import Dialogs from './Dialogs/dialogs';
import Profile from './Profile/Profile';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Dialogs/dialogsContainer';
import UsersContainer from './Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='grid'> 
      <header className='header'>
        <h1>Header</h1>
      </header>
    <nav className='nav'>
      <div>
        <NavLink to='/profile' exact activeClassName="active">Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>
      <div>
        <a href='/contact'>Contact</a>
      </div>

    </nav>

    <div className='content'>
      <Routes> 
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route path='/users' element={<UsersContainer/> }/>
      </Routes>
    </div>
    {/* <Post message="Hi,how are you?"/>
    <Post message="You bro"/>
    <Post like='15'/> */}
    {/* profilePage={props.state.profilePage} */}
   
    </div>
    </BrowserRouter>
  );
}

export default App;
