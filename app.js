const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const { join } = require('node:path');

const {
  validateInputDataWithYup,
} = require('./middlewares/validateInputDataWithYup');

app.use(express.json());
app.use(cookieParser());
app.use(validateInputDataWithYup);
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
}); 

app.use('*', (req, res, next) => {
  res
    .status(400)
    .json({ message: 'The requested resource was not found on this server' });
});
// Global Error Handler
app.use(require('./middlewares/globalErrorMiddleware'));
module.exports = app;
