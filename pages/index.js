import Link from "next/link";

export default function Home() {
    return (
        <div>
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
