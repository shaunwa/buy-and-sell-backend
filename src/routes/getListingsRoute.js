import { db } from '../database';

export const getListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (request, h) => {
        try {
            const { results } = await db.query('SELECT * FROM listings');
            return results;
        } catch (e) {
            console.log(e);
            return new Error(e);
        }
    }
}