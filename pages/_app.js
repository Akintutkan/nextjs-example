import "../public/styles/global.css"
import Header from "../components/header"
import { Fragment } from "react"

export default function App({ Component, pageProps }) {
    return <div>
    <Header/>
        <Component {...pageProps} />;
  </div>
  }