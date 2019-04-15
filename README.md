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

getTotalLinkClicks('vCHktm')
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

### addGroup

> Create a new group

```javascript
import { addGroup } from '@mishguru/geniuslink'

const groupName = 'best-links-ever'

addGroup(groupName)
  .then((groupId) => {
    // groupId === 33118
    ...
  })
```

### addLinkToGroup

> Create a new tracked link with a specific group

```javascript
import { addLinkToGroup } from '@mishguru/geniuslink'

const url = 'https://mish.guru'
const groupId = 12345

addLinkToGroup(url, groupId)
  .then((result) => {
    // result: { id: 'vCHktm', code: 'h4o0n' }
  })
```

### getTotalLinkClicks

> Get the total number of clicks on a specific link

```javascript
import { getTotalLinkClicks } from '@mishguru/geniuslink'

const id = 'vCHktm'

getTotalLinkClicks(id)
  .then((count) => {
    // count === 472
    ...
  })
```

### getGroupDetailsByName

> Get details of a group based on the group name

```javascript
import { getGroupDetailsByName } from '@mishguru/geniuslink'

const name = 'default'

getGroupDetailsByName(name)
  .then((group) => {
    // group.id === '1234'
    ...
  })
```

### getGroupDetailsById

> Get details of a group based on the group id

```javascript
import { getGroupDetailsByName } from '@mishguru/geniuslink'

const id = '1234'

getGroupDetailsBId(id)
  .then((group) => {
    // group.name === 'default'
    ...
  })
```
