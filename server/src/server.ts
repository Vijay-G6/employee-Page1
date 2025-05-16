import cors from 'cors';
import express from 'express';

import badgesRoutes from './route-methods/badges';
import employeesRoutes from './route-methods/employees';

const app = express();
const PORT = 3030;

// CORS for react app, assuming port 3000
app.use(cors());

app.use(express.json())

/* ********* middlewares ********* */
// use middleware to serve static images
app.use(express.static('public'));

/* *********** routes ********* */

// get all badges
app.get('/badges', badgesRoutes.get);

// search employees by filter term
app.get('/employees', employeesRoutes.getFiltered);

// get employee by ID
app.get('/employees/:id', employeesRoutes.getById);

// add badge to employee
app.patch('/employees/:employeeId/badges', employeesRoutes.addBadge);


// Basic route to test
app.get('/employees', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});



/* *********** END: routes ********* */


export const startUp = async (): Promise<void> => {
  app.listen(PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`Employee server listening on port : ${PORT}`),
  );
};

export default app;
