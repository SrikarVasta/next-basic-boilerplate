# Next JS Boilerplate

A Boilerplate for next with preconfigured listing for an open Graphql Endpoint

## Technology Used

- [Next.js](https://nextjs.org/)
- [Yarn](https://yarnpkg.com)
- [GraphQL](https://graphql.org/)
- [React styled components](https://styled-components.com)

## Getting started

1. Install packages

   - `yarn install`

2. Run
   - `yarn run dev`

3. Environment variables
   - Make sure `.env` is set up as per the example.

## Development Principles and Conventions

1. Componenets Use Atom, molecules, Organism Structure.
   - All Atoms (Buttons, Inputs) will be grouped in a folder and will be used my molecules. All components of a type will be present in a single folder.
2. All componenets Must be functional components.
3. Presentation layer and controllers.
   - This will be loosely followed and Custom hooks will mostly act as a controller for most componenets.`
4. A global context and a page context will be in place to manage the respective states.
