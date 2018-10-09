export const mockResponse = (status: number, statusText: string, response: string) => {
    return new Response(response, {
        headers: {
            'Content-type': 'application/json'
        },
        status,
        statusText
    });
};