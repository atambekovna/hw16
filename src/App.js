import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AutnConText from './store/ThemeProvider';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [swicher,setSwucher] = useState(false)

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedIn === '1') {
      setIsLoggedIn(true)
    }
  })

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AutnConText.Provider value={{onSwicher:setSwucher}}>

      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main style={{backgroundColor:!swicher ? 'white' : 'black'}}>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>

      </AutnConText.Provider>
     
    </React.Fragment>
  );
}

export default App;
