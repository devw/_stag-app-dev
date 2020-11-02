import React from 'react';
import Link from "next/link";
import { Option } from "./option-theme";
import { onSubmit } from "./onSubmit-theme";

type IProps = { data: { SK: string }[] };

const Themes: React.FC<IProps> = ({ data }): JSX.Element => {
    const themes = data;
    const listItems = themes.map((theme, i) =>
        <Option key={i} props={theme} />
    );
    return (
        <form onSubmit={() => onSubmit}>
            <select>
                {listItems}
            </select>
            <button type="button" onClick={changeCurrentTheme}>Change the current theme</button>
            Or
            <Link href="/upload">Upload a new theme</Link>
        </form>
    );
}

export interface Theme {
    SK: string,
    src: string
}

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/themes`);
    const data: Theme[] | undefined = await res.json();
    return { props: { data } };

}

const changeCurrentTheme = () => {

}

export default Themes;
