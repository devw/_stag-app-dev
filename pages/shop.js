import { json2table } from "./utils/json-to-table";
import fixture from "./fixtures";

const Shop = ({ shopData = fixture.shopData }) => json2table(shopData);

// export async function getServerSideProps() {
//     const { AWS_ENDPOINT, SHOP } = process.env;
//     const res = await fetch(`${AWS_ENDPOINT}/dev/get-shop/${SHOP}`);
//     const data = await res.json();
//     console.log(data);
//     return { props: data };
// }

export default Shop;
