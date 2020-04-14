import { db } from '../database';

export const getListingsForUserRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const { userId } = req.params;
        try {
            const { results: listings } = await db.query(
                `SELECT * FROM listings WHERE user_id=?`,
                [userId],
            );
            return listings;
        } catch (e) {
            console.log(e);
            return new Error(e);
        }
    },
};