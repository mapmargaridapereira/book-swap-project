import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Pages/HomePage";
import BooksAvailablePage from "./Pages/BooksAvailablePage";
import NewBookOffer from "./Pages/NewBookOfferPage";
import BookDetailsPage from "./Pages/BookDetailsPage";
import SignUpPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import EditBookOfferPage from "./Pages/EditBookOfferPage";
import AboutUsPage from "./Pages/AboutUsPage";
import EditProfilePage from "./Pages/EditProfilePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar offers={offers} setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<BooksAvailablePage />} />
        <Route path="/offers/:bookId" element={<BookDetailsPage />} />
        <Route path="/offers/new" element={<NewBookOffer />} />
        <Route path="/offers/edit/:bookId" element={<EditBookOfferPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/editprofile" element={<EditProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;