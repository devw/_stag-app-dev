import { JS2TBL } from "../utils";

type Props = { data: object[] };

const Shop: React.FC<Props> = ({ data }) => (
    <JS2TBL title="Shop Info" json={data} />
);

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/dev/get-shop/${SHOP}`);
    const data = await res.json();
    console.log(`AWS_ENDPOINT ${AWS_ENDPOINT}/dev/get-shop/${SHOP}`)
    return { props: { data } };
}

export default Shop;
