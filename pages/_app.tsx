export default function App({ Component, pageProps }) {
    pageProps.AAA = "Asdsa";
    return <Component {...pageProps} />;
}
