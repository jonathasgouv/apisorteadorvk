// Inicializa o express e passa o JSON como o padrão //
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
let group_id = '';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/getMembers', async (req, res) => {
  try {
    console.log(req.query)
    tid = req.query.tid

    members = []

    url = `https://api.vk.com/method/board.getComments?group_id=${group_id}&count=100&topic_id=${tid}&offset=0&sort=asc&access_token=${process.env.KEY}&v=5.52`
    
    data = await fetch(url)
    data =  await data.json()

    for (member of data.response.items) {
      if (!members.includes(member.from_id)) {
        members.push(member.from_id)
      }
    }
    
    return res.json({"uids": members})

  } catch(e) {
    console.log(e)
    return res.status(400).json({error: 'Failed to fetch'})
  }
})

app.get('/getMember', async (req, res) => {
  try {
    console.log(req.query)
    uid = req.query.uid

    members = []

    url = `https://api.vk.com/method/users.get?user_ids=${uid}&fields=photo_big&access_token=${process.env.KEY}&v=5.52`
    
    data = await fetch(url)
    data =  await data.json()

    return res.json(data)

  } catch(e) {
    console.log(e)
    return res.status(400).json({error: 'Failed to fetch'})
  }
})

app.listen(3000, () => console.log('server started'));
