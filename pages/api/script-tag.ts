import {NextApiRequest, NextApiResponse} from 'next';

export default async  (req: NextApiRequest, res: NextApiResponse ) => {
    console.log("req.query", req.query);
    const { query } = req.query;
    const {accessToken, SHOP, SCRIPT_TAG} = process.env; 
    const Shopify = require("shopify-api-node");
    const { scriptTag } = new Shopify({
        shopName: SHOP,
        accessToken: accessToken,
    });
    try {
        const data = await scriptTag.[query]({ src: SCRIPT_TAG, event: "onload" });
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({data: [{error : e.message}]});
    }
}
