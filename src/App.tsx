import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Listing from "../src/pages";
import Form from "../src/pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;