const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const gurucontroller = require('../router/controllers/guru')




  router.get('/guru', gurucontroller.index)

  router.get('/guru/:id', gurucontroller.show)

    router.post('/guru/add', gurucontroller.store)
    
    router.put('/guru/edit/:id', gurucontroller.update)
  
    router.delete('/guru/delete/:id', gurucontroller.delete)
    module.exports = router