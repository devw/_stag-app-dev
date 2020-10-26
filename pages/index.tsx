import Link from "next/link";
import styles from "./index.module.css"

export default function Home(pageProps) {
    console.log(pageProps);
    return (
        <div className={styles.home}>
            <div>
                <Link href="/script-tag">script-tag</Link>
            </div>
            <div>
                <Link href="/shop">shop</Link>
            </div>
            <div>
                <Link href="/upload">Upload a theme</Link>
            </div>
        </div>
    );
}
