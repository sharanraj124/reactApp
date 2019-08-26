const express = require('express'),
      connectDb = require('./config/db'),
      user = require('./models/user');

const app = express();

// Connect Database
connectDb();

//Init missleware
app.use(express.json({ extended: true }));

const route = require('./routes/api');
app.use(route);


const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
   console.log(`App listing port ${PORT}`);
})