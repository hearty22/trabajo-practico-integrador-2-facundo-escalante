import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/Navbar";
export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
