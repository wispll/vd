const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const persons = {
  '1': {
    name: "AAA",
    balance: 400
  },
  '2': {
    name: "BBB",
    balance: 400
  },
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/charge', (req, res) => {
  let body = req.body
  console.log(body)
  let result = (persons[body.id].balance += 200)
  res.send(result);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
