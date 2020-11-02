type Props = { data: object[{ SK: string }] };


const Shop: React.FC<Props> = ({ data }): JSX.Element => {
    return <div className="shops">
        {data.map((shop, i) => (
            <div key={i} className="user"><a target="_" href={`http://${shop.SK}`}>{shop.SK} </a></div>
        ))}
    </div>
}

export async function getServerSideProps() {
    const { AWS_ENDPOINT, SHOP } = process.env;
    const res = await fetch(`${AWS_ENDPOINT}/shops`);
    const json = await res.json();

    return { props: { data: json } }
}

export default Shop;
