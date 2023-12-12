function tempo({ request, response }: any) {
    const dynamicDate = new Date();

    response.json({
        name: 'Daniel'
    })
}

export default tempo;