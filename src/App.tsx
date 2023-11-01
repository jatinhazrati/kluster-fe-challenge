import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { fetchBooks } from "./redux/books/reducer";
import { useAppDispatch } from "./redux/hooks";
import { ROUTES } from "./utils/routes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <Suspense fallback={<>Loading ...</>}>
      <Header />
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
