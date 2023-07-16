const express = require('express');

const campaigns = [
  {
    id: 1,
    name: "Title1"
  },
  {
    id: 2,
    name: "Title2"
  }, {
    id: 3,
    name: "Title3"
  }, {
    id: 4,
    name: "Title4"
  }
]

const app = express();

app.get('/api/campaigns', (req, res) => {
  res.send(campaigns);
})

app.get('/api/campaign/:id', (req, res) => {
  const campaign = campaigns.find(x => x.id === parseInt(req.params.id));
  if (!campaign) {
    res.status(404).send('Campaign Not Found');
  }
  res.send(campaign);
})

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));