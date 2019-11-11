import express from 'express';

import ContactsController from '../controllers/ContactsController';

const routes = express.Router();

routes.get('/contacts', ContactsController.index);

export default routes;
