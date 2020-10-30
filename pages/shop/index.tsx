import { JS2TBL } from "../utils";

type Props = { data: object[] };

const Shop: React.FC<Props> = ({ data }) => {
    return <JS2TBL title="Shop Info" json={data} />
}

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/dev/shop/${SHOP}`);
    const data = await res.json();
    return { props: { data } };

}

export default Shop;
