import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import { routes } from './routes';
import { db } from './database';

const start = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await server.register(inert);

    routes.forEach(route => {
        server.route(route);
    });

    db.connect();
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    // db.end();
    process.exit(1);
});

start();