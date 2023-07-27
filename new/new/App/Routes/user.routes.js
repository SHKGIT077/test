
"use strict"

const router = require("express").Router()


const { AddEmployee}= require('../Controllers/user.controller')
// const { check } = require('express-validator');

router.get('/add',AddEmployee)

// router.get('/getall',GetAllEmployee)





module.exports = router;
