import {
  ClerkProvider,
  SignedIn,
  SignedOut
} from "@clerk/clerk-react";
import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SignOutFallback from "./components/SignOutFallback";
import { fetchBooks } from "./redux/books/reducer";
import { useAppDispatch } from "./redux/hooks";
import { PRIVATE_ROUTE, PUBLIC_ROUTES } from "./utils/routes";

function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <Suspense fallback={<>Loading ...</>}>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <Header />
        <Routes>
          {PUBLIC_ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {PRIVATE_ROUTE.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  <SignedIn>
                    <route.component />
                  </SignedIn>
                  <SignedOut>
                    <SignOutFallback />
                  </SignedOut>
                </>
              }
            />
          ))}
        </Routes>
      </ClerkProvider>
    </Suspense>
  );
}

export default App;
