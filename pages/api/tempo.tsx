import { NextApiRequest, NextApiResponse } from "next";

function tempo(request: NextApiRequest, response: NextApiResponse) {
    const dynamicDate = new Date();

    response.json({
        name: 'Daniel'
    })
}

export default tempo;