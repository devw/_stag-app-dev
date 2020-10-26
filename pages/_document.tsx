import Document, { Html, Head, Main, NextScript } from "next/document";
import Nav from "./nav";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="it">
                <Head />
                <body>
                    <Nav />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
