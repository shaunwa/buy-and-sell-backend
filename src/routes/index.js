import { deleteListingRoute } from './deleteListingRoute';
import { getListingByIdRoute } from './getListingByIdRoute';
import { getListingsRoute } from './getListingsRoute';
import { getListingsForUserRoute } from './getListingsForUserRoute';
import { createListingRoute } from './createListingRoute';
import { filesRoute } from './filesRoute';
import { updateListingRoute } from './updateListingRoute';

export const routes = [
    deleteListingRoute,
    getListingByIdRoute,
    getListingsRoute,
    getListingsForUserRoute,
    createListingRoute,
    updateListingRoute,
    filesRoute,
];