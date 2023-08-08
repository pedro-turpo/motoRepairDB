const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller')

const userRoutes = require('./routes/user.route');
const repairRoutes = require('./routes/repair.route');

const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', repairRoutes);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler)

module.exports = app;

/* 
/// !PERSONAL_NOTES
1.No 45
*/
