import Link from "next/link";
import styles from "./nav.module.css"

export default function Nav(pageProps) {
    return (
        <div className={styles.nav}>
            <div>
                <Link href="/script-tag">Script-tag</Link>
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
