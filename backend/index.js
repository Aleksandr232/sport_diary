const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()
const PORT = process.env.PORT || 3001


app.use(express.json())

// GET
app.get('/api/plans/', (req, res) => {
  res.json({data:{
    id: v4(), 
    datas: '14-08-2022', 
    moring: '10/500м', 
    evening: '2 часа аэроба',
    pulse:'утро: 170-190чсс, вечер: 130чсс',
    exercise:{
      url: 'https://www.youtube.com/watch?v=JwstsZveJ7I'
    }
  
  }})
})





app.listen(PORT, () => console.log('Server has been started on port 3000...'))