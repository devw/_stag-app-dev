import { json2table } from "./utils/json-to-table";
import fixture from "./fixtures";

const ScriptTag = ({ data = fixture.scriptTag }) => json2table(data);

export async function getServerSideProps() {
    const Shopify = require("shopify-api-node");
    const { scriptTag } = new Shopify({
        shopName: process.env.SHOP,
        accessToken: "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", // you should get it from aws:dynamo
    });
    const SCRIPT_TAG = "https://devw.github.io/script-tag/bundle.js"; // you should get it from aws:dynamo
    const data = await scriptTag.list({ src: SCRIPT_TAG });
    console.log("ScriptTag", process.env.SHOP, data);

    return { props: { data } };
}

export default ScriptTag;
