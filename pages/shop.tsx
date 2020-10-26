import { JS2TBL } from "./utils";

const Shop = ({ shopData = fixture.shopData }) => (
    <JS2TBL title="Shop Info" json={shopData} />
);

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/dev/get-shop/${SHOP}`);
    const data = await res.json();
    console.log(data);
    return { props: data };
}

export default Shop;
