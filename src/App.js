// import { Route } from "react-router-dom";
import {  Routes, Route } from 'react-router-dom';



import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';


function App() {
  return <div>
    {/* <Route path="/">
      <AllMeetupPage />
    </Route>
    <Route path="/new-meetup">
      <NewMeetupsPage />
    </Route>
    <Route path="favorites">
      <FavoritesPage />
    </Route> */}
    <Layout>
    <Routes>
        <Route path="/" element={<AllMeetupPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
    </Layout>

  </div>;
}

export default App;