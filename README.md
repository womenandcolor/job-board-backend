## Docker setup

This project uses Docker for local development so that you can have a local copy of the database on your machine.

Specifically this requires us to use Docker Compose. Follow the instructions [here](https://docs.docker.com/compose/install/#install-compose) to install it. See below for some common troubleshooting tips if (when) you end up having issues with your Docker setup.

## Set up the app locally

You should only have to do this the first time you're setting up, if you change `docker-compose.yml` or the `Dockerfile`, or if you add a new package.

Make sure docker is running on your computer.

```sh
$ yarn install
```

```sh
$ docker-compose up --build
```

## Run the app locally

Make sure docker is running on your computer.

```sh
$ docker-compose up
```

## Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.

Middleware can be at the application level or at the router level.

## Database

We are using a postgres database that is being setup by a docker container. To query our database, we are using [knex](https://knexjs.org/).

To get or set data in the db, you can `require` the `db` module out of `src/db/index.js` and use it to run database queries.

To add new tables or columns or to alter the db schema in any way, you will have to create a [migration script](https://knexjs.org/#Migrations-CLI). See examples of this in the `migrations` folder.

To connect to your local copy of the the db through a postgres client for debugging, download a postgres client (e.g. [Postbird](https://github.com/paxa/postbird)) and enter the following credentials.

```
host: localhost
username: postgres
password: password
```

## Commit messages

In order to keep a clean git history merges should always be squashed with a consistent commit message style.

## Troubleshooting Docker

### Hot Reloading isnt working

Sometimes, after you run `docker-compose up` you might notice that after making changes to your files, the server isn't reloading. In this case try running `docker-compose-up --build`. If that doesn't work try removing your machines and rebuilding from scratch.

### Database connection issues

If you have any issues connecting to the database locally, delete your database machine and run `docker-compose up --force-recreate`.
