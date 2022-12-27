import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar dialogsPage={props.state.dialogsPage} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
              publicPost={props.publicPost}
              updateNewPostText={props.updateNewPostText}
            />} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}
              publicMassage={props.publicMassage}
              updateNewMassageText={props.updateNewMassageText} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
