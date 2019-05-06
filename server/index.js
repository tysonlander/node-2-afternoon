const express = require('express')
const mc = require('./controllers/messages_controller');

const app = express();
app.use(express.json())
app.use(express.static(__dirname + '/..public/build'));

const messagesBaseURL = '/api/messages';
app.post(messagesBaseURL, mc.create);
app.get(messagesBaseURL, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);

app.get('/',(req, res) => {
  res.send("hello, this is the homepage")
} )


app.listen(3001, () => {
  console.log('listing on port 3001')
});