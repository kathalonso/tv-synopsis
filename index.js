const express = require('express')
const showData = require('./showData')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('mainpage', { showData })
})

app.get('/season/:number', (request, response) => {
  const findSeason = showData.seasons.find((season) => {
    return season.number === parseInt(request.params.number)
  })
  return response.render('seasonpage', { title: showData.title, season: findSeason })
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})
  
app.listen(1337, () => {
  console.log('Listening on 1337...') 
})

// store application code here