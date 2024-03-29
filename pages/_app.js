import { useEffect } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css'
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  });

  return <Component {...pageProps} />;
}

export default MyApp;