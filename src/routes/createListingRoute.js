import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const { newListing } = req.payload;
        const { name, description, price } = newListing;
        const id = uuid();
        const userId = '99999'; // In real life, we'd get this value from the auth provider

        try {
            const { results } = await db.query(`
                INSERT INTO listings (id, name, description, price, user_id)
                VALUES (?, ?, ?, ?, ?)
            `,
            [id, name, description, price, userId]);
            return { id, name, description, price, user_id: userId };
        } catch (e) {
            console.log(e);
            return new Error(e);
        }
    },
}