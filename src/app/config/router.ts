import { Router } from 'express';

import pagesRoute from '../../modules/pages/pages.route';

const routes = [
    pagesRoute,
];

const router = Router();
for (const route of routes) {
    router.use('/', route)
}

export default router;