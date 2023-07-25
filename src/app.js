const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/user.route');
const repairRoutes = require('./routes/repair.route');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', repairRoutes);

module.exports = app;

/* 
/// !PERSONAL_NOTES
1. No se aplico paso 13
*/
