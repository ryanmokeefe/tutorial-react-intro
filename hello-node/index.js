const _ = require('lodash')

const variousBrownBears = require('./bears.js')
const randomBear = _.sample(variousBrownBears)
  
  console.log(randomBear)
