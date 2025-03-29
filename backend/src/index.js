const express = require('express');
const bodyParser = require('body-parser');
const assistantRoutes = require('./routes/assistant');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/assistant', assistantRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
