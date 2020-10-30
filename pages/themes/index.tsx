
type Props = { data: object[] };

const onSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.querySelector("select").value;
    fetch('./api/upload', { method: "POST", body: value })
}


const Option = ({ props }) => {
    const { SK } = props;
    return (
        <option>{SK}</option>
    );
}

const Themes: React.FC<Props> = ({ data }) => {
    const themes = data;
    const listItems = themes.map((theme, i) =>
        <Option key={i} props={theme} />
    );
    return (
        <form onSubmit={onSubmit}>
            <select>
                {listItems}
            </select>
            <button type="submit">Upload theme</button>
        </form>
    );
}

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/dev/shop/${SHOP}`);
    const data = await res.json();
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
