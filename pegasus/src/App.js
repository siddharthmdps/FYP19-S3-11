import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import Profile from './containers/Profile/Profile'

function App() {
  const [showDrawer, showDrawerHandler] = useState(false);
  const toggleDrawer = () =>{
    showDrawerHandler(!showDrawer);
  }
  return (
    <div className="App">
      <Layout drawer={showDrawer} toggleDrawer={toggleDrawer}>
        <Profile></Profile>
      </Layout>
    </div>
  );
}

export default App;
