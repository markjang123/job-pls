const express = require("express");
const app = express();
const methodOverride = require("method-override")
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const postings = require("./routes/api/postings");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/public'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
  })
}


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(methodOverride("_method"))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/postings", postings);