# Virtalis Docs

This repo contains the documentation for all of our applications. The documentation is stored as markdown and the web front-end is built with [Docusaurus](https://docusaurus.io/).

![test](screenshot.png?raw=true)

### Installation

```
$ yarn
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && npm run deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
