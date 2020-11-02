import React from 'react';
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
            <button type="submit">Upload theme</button>
        </form>
    );
}

export interface Theme {
    SK: string,
    src: string
}

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/dev/shop/${SHOP}`);
    const data: Theme[] | undefined = await res.json();
    return {
        props: {
            data: [
                {
                    SK: "theme-1",
                    src: "http://adsdsads.js"
                },
                {
                    SK: "theme-2",
                    src: "http://adsdsads.js"
                },
                {
                    SK: "theme-3",
                    src: "http://adsdsads.js"
                }
            ]
        }
    }
    return { props: { data } };

}

export default Themes;
