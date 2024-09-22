import express from 'express';
import router from './view/route.js';
import cors from 'cors';
import sequelize from './db.js';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());  // Note: Added () to call the cors function

// Routes
app.use(router);

sequelize.authenticate().then(() => {
    app.listen(8000, () => {
        console.log('Server connected at port 8000');
    });
}).catch((err) => {
    console.log('Error in sequelize authentication:', err);
});
