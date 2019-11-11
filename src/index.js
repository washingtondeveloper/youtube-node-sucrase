import express from 'express';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(routes);

if (process.env.NODE_ENV !== 'test') {
	app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}

export default app;
