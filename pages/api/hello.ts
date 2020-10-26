import {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res:NextApiResponse ) => {
    console.log("server-side", process.env.SHOP);
    res.setHeader("X-Customer-Header", "wqeq");
    res.status(200).json({ text: 'hello' });
};
