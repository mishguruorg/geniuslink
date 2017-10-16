# geniuslink

> GeniusLink API wrapper for Node.js

## Installation

```shell
npm install @mishguru/geniuslink
```

## Usage

```javascript
import { initGeniusLink, getTotalLinkClicks } from '@mishguru/geniuslink'

initGeniusLink({
  key: process.env.GENIUSLINK_API_KEY,
  secret: process.env.GENIUSLINK_API_SECRET,
})

getTotalLinkClicks('a1b2c3')
  .then(console.log)
```

## Documentation

All of the following functions can be imported from `@mishguru/geniuslink`.

### initGeniusLink

> This must be called to declare the API key/secret and initiate the library.

```javascript
import { initGeniusLink } from '@mishguru/geniuslink'

initGeniusLink({
  key: process.env.GENIUSLINK_API_KEY,
  secret: process.env.GENIUSLINK_API_SECRET,
})
```

### addTrackedLinkForGroup

> Create a new tracked link with a specific group

```javascript
import { addTrackedLinkForGroup } from '@mishguru/geniuslink'

const url = 'https://mish.guru'
const groupId = 12345

addTrackedLinkForGroup(url, groupId)
  .then(console.log)
```

### getTotalLinkClicks

> Get the total number of clicks on a specific link

```javascript
import { getTotalLinkClicks } from '@mishguru/geniuslink'

const shortcode = 'r93n5'

getTotalLinkClicks(shortcode)
  .then(console.log)
```
