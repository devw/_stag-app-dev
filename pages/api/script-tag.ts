import {NextApiRequest, NextApiResponse} from 'next';

export default async  (req: NextApiRequest, res: NextApiResponse ) => {
    const {accessToken, SHOP, SCRIPT_TAG} = process.env; 
    const Shopify = require("shopify-api-node");
    const { scriptTag } = new Shopify({
        shopName: SHOP,
        accessToken: accessToken,
    });
    try {
        const data = await scriptTag.list({ src: "asdasds" });
    } catch (e) {
        return res.status(500).json({data: [{error :"Internal Server Error "}]});
    }
}
