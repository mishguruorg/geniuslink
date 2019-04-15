const initGeniusLink = require('./dist/initGeniusLink').default
const addLinkToGroup = require('./dist/requests/addLinkToGroup').default
initGeniusLink({
  key: process.env.GENIUSLINK_API_KEY,
  secret: process.env.GENIUSLINK_API_SECRET
})
addLinkToGroup('http://www.stuff.co.nz', '81222')
    .then(console.log)
