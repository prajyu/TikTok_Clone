import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NavBar from "../components/Navbar";

function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
