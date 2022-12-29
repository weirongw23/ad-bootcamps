# Atlas Digital Bootcamps

[Atlas Digital](https://atlasdigital.org/) is a student-led consulting group dedicated to making a positive impact by providing software to nonprofits, high-growth startups, and F500 companies.

## Introduction

These tutorials are made for analysts of all backgrounds. It covers basic scripting, the internals of Git, and full-stack development.

## Running the code locally

First, clone the repository from Github. Then, run `npm run start` to start the development server. As you modify the JavaScript and Markdown pages, the changes will be automatically reflected on the browser (as long as you don't close the terminal session).

```
$ git clone git@github.com:weirongw23/ad-bootcamps.git
$ npm run start
```

### Installation and Local Development

If the above command does not work, this command starts a local development server and opens up a browser window.

```
$ yarn
$ yarn start
```

## Contributing

Interested in contributing to Atlas Digital bootcamps? We'd love to see your work. Follow these instructions on how to contribute.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Authors

Atlas Digital bootcamps were built by the following wonderful members of Atlas Digital.

-   [Peter Wu](https://www.weirongw.io)

## Acknowledgements

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It uses JavaScript and React to built extensible front-end components, and Markdowns to write/update tutorials.

The project is currently maintained by Peter Wu ([@weirongw](https://github.com/weirongw23)) along with Atlas Digital ([Atlas Digital](https://atlasdigital.org/)).
