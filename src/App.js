// for Authenticate App
// import './App.css';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import Home from "./componentsFirebase/Home";
// import Login from "./componentsFirebase/Login";
// import Signup from "./componentsFirebase/Signup";
// import { UserAuthContextProvider } from "./context/UserAuthContext";
// import ProtectedRoute from "./componentsFirebase/ProtectedRoute";
// import PhoneSignup from './componentsFirebase/PhoneSignup';

//Movie App
import Header from './components/Header/header';
import MovieDetails from './components/MovieDetails/movieDetails';
import PageNotFound from './components/PageNotFound/pageNotFound';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
//import UserList from './components/UserList/UserList';
import HOCMain from './components/HOCMain/HOCMain';

// import ProductList from './componentsProducts/ProductList';
// import ProductDetail from './componentsProducts/ProductDetail';

function App() {
  return (
    //Phone Authentication with Firebase
    // <Container style={{ width: "400px" }}>
    //   <Row>
    //     <Col>
    //       <UserAuthContextProvider>
    //         <Routes>
    //           <Route
    //             path="/home"
    //             element={
    //               <ProtectedRoute>
    //                 <Home />
    //               </ProtectedRoute>
    //             }
    //           />
    //           <Route path="/" element={<Login />} />
    //           <Route path="/signup" element={<Signup />} />
    //           <Route path="/phonesignup" element={<PhoneSignup />} />
    //         </Routes>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    // </Container>
    //Movie Projects(Nikunflex)
    <div className="App">
       <BrowserRouter>
          <Header />
              <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movie/:imdbID" element={<MovieDetails/>} />
                    <Route element={<PageNotFound />} />
                    {/* <Route path="/user" element={<UserList />} /> */}
                    <Route path="/hoc" element={<HOCMain />} />
                </Routes>
              </div>  
          <Footer />      
        </BrowserRouter>
         {/* Product Project */}
       {/* <BrowserRouter>
      // <Header />
      //       <Routes>
      //           <Route path="/" element={<ProductList/>} />
      //           <Route path="product/:productId" element={<ProductDetail/>} />
      //           <Route>404 Not Found</Route> *
      //       </Routes>
      //   </BrowserRouter> */}
       
    </div>
  );
}

export default App;