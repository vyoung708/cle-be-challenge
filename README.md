# Cleveland Guardians Backend Challenge

## Setup

#### Vercel

- Create a free [Vercel](https://vercel.com/) account
- Install [Vercel CLI](https://vercel.com/cli)

#### Development

- Clone repository
- Run `npm install` (after ensuring that node, npm are installed locally)
- Run `vercel dev` in a terminal window inside of this repository to spin up a development server

#### Deployment

- Push repository to your github account
- Open Vercel, create new project, link to Github repository
- Use provided URL in the front end part of the challenge

---

## Provided Endpoint Documentation

# `/players`

#### Query Params

`playerId` - optional

#### Description

If no query param is passed, returns a list of playerOverviews

```js
// return object
{
  players: [];
}
```

If a playerId is passed, returns detailed playerDetails

```js
// return object
{
  playerDetails: {
  }
}
```

# `/pitches`

#### Query Params

`playerId` - required

#### Description

Returns a list of pitches for the passed in playerId

```js
// return object
{
  pitches: [];
}
```
