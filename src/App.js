import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './pages/about/About';
import MainLayout from './components/Layout/MainLayout';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
      path: "about",
      element: <About />
    }]
  },
  {
    path: "/about",
    element: <About />
  }
])

function Home() {
  return <div>
    <div className="my-3">
    <img src="http://www.carku.com/uploadfile/menu/20220921173421.jpg" style={{maxWidth: "100%"}}/>
    </div>
    <About />
    <ContactUs />
    <Footer />
  </div>
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
