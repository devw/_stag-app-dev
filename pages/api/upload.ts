import {NextApiRequest, NextApiResponse} from 'next';

export default async  (req: NextApiRequest, res: NextApiResponse ) => {
    const url =  `${process.env.AWS_ENDPOINT}/dev/upload`;
    // const postRes = await fetch(url, {
    //     method: req.method,
    //     body: JSON.stringify({fName: "test.zip", data:""})
    // });
    const postRes = await fetch(url, {
        method: req.method,
        body: req.body
    });
    res.status(200).json(await postRes.json());
};
