import { Router } from 'express';

import pagesRoute from '../../modules/pages/pages.route';
import authRoute from '../../modules/auth/auth.route';

const routes = [
    pagesRoute,
    authRoute,
];

const router = Router();
for (const route of routes) {
    router.use('/', route)
}

export default router;