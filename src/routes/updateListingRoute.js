import { db } from '../database';

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const { name, description, price } = req.payload.changes;
        try {
            const result = await db.query(
                `UPDATE listings
                 SET name=?, description=?, price=?
                 WHERE id=?`,
                [name, description, price, id],
            );
            return result;
        } catch (e) {
            console.log(e);
            return new Error(e);
        }
    },
}