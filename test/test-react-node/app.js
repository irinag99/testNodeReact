const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const methodOverride = require('method-override');

const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category');
const appsRouter = require('./routes/apps');
const cartRouter = require('./routes/cart');

const app = express();


app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'test',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(cors({
  origin:'http://localhost:3001',
  credentials: true
}))

app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/apps', appsRouter);
app.use('/cart', cartRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
