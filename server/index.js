const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('Connected to DB!')
);

app.use(bodyParser.json());
app.use(cors());

const authRoute = require('./routes/auth');
const companiesRoute = require('./routes/companies');
const studentsRoute = require('./routes/students');
const jobsRoute = require('./routes/jobs');
const profileRoute = require('./routes/profile');

app.use('/api/user', authRoute);
app.use('/companies', companiesRoute);
app.use('/students', studentsRoute);
app.use('/jobs', jobsRoute);
app.use('/profile', profileRoute);

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
