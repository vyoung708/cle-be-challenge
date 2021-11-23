# Cleveland Guardians Backend Challenge

Using this starter repository, create endpoints that follow the outlined spec below utilizing Vercel's Node.js runtime: [Vercel Docs](https://vercel.com/docs/runtimes#official-runtimes/node-js)

Once you have completed replacing the provided endpoints (as well as any of the sections of the FE portion of the challenge), email the hiring manager you are in contact with to your forked CodeSandbox and your github repo for this BE challenge.

Good luck!

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
- Now replace the provided endpoints with your custom ones.

---

### Provided Endpoint Documentation

## `/players`

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

## `/pitches`

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
