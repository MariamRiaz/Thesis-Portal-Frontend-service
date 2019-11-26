# ThesisPortalApp

This repo contains the angular app along with a Dockerfile and docker-compose.
It also contains a mock json-server database which can be used during development.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Installing json server

Run `npm install -g json-server`

## Running the json server

Run `json-server --watch db.json`

## Docker

DockerFile and docker-compose.yml can be found in the root folder

Run `docker-compose up` to run the app on docker