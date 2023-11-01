import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { fetchBooks } from "./redux/books/reducer";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
