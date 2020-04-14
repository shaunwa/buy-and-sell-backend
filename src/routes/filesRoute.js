export const filesRoute = {
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'dist/buy-and-sell'
        }
    }
}