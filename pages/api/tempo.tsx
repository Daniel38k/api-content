import { NextApiRequest, NextApiResponse } from "next";

const tempo = (request: NextApiRequest, response: NextApiResponse) => {
    try {
        response.status(200).json([
            { id: 1, name: 'Daniel' },
            { id: 2, name: 'Danil' }
        ])
    } catch (err) {
        response.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default tempo;