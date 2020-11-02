import React from "react";
import Link from "next/link";
import styles from "./nav.module.css"

export const Nav: React.FC = () => {
    return (
        <div className={styles.nav}>
            {/* <div>
                <Link href="/script-tag">Script-tag</Link>
            </div> */}
            <div>
                <Link href="/shop">shop</Link>
            </div>
            <div>
                <Link href="/themes">Themes</Link>
            </div>
        </div>
    );
}
