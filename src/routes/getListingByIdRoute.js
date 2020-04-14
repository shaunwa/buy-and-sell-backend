import { db } from '../database';

export const getListingByIdRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        try {
            const { results } = await db.query(
                `SELECT * FROM listings WHERE id=?`,
                [id],
            );
            return results;
        } catch (e) {
            console.log(e);
            return new Error(e);
        }
    },
}