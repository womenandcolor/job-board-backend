## 🚧 Setup

### 1. 🐳 Setup Docker

This project uses Docker for local development so that you can have a local copy of the database on your machine.

Specifically this requires us to use Docker Compose. Follow the instructions [here](https://docs.docker.com/compose/install/#install-compose) to install it. See below for some common troubleshooting tips if (when) you end up having issues with your Docker setup.

### 2. 🛠 Build the app locally

You should only have to do this the first time you're setting up, if you change `docker-compose.yml` or the `Dockerfile`, or if you add a new package.

Make sure docker is running on your computer.

```sh
$ yarn install
```

```sh
$ docker-compose up --build
```

### 3. 🛢 Setup the Database

To connect to your local copy of the the db through a postgres client for debugging, download a postgres client (e.g. [Postbird](https://github.com/paxa/postbird)) and enter the following credentials.

See the team Slack channel to import a `.sql` file to seed your db.

```
host: localhost
username: postgres
password: password
```

Open a separate terminal window to the same directory and run the database migrations. You will have to do this if there are any changes made to the `migrations` folder to ensure you're running the most up to date database schema locally.

```sh
$ npm run db:migrate
```

You should be all setup for development now!

## ⚡️ Run the app locally

You should only have to do the setup instructions once, whenever you're developing you can jump to here.

Make sure docker is running on your computer.

```sh
$ docker-compose up
```

## 💁 How the app works

### 🛢 Knex.js for querying the database

We are using a postgres database that is being setup by a docker container. To query our database, we are using [knex](https://knexjs.org/).

To get or set data in the db, you can `require` the `db` module out of `src/db/index.js` and use it to run database queries.

Here is a handy cheatsheet for [`knex functions`](https://devhints.io/knex).

### ✈️ Migrations

To add new tables or columns or to alter the db schema in any way, you will have to create a [migration script](https://knexjs.org/#Migrations-CLI). See examples of this in the `migrations` folder.

To create a new migration run:

```sh
$ npm run db:create-migration -- <migration-name>
```

This will create a new file inside of the `migrations` directory that looks like `<timestamp>_<migration_name>`. When you create a new migration make sure to check it into source control!

To run the migration to reflect the db changes you've made to your local db run:

```sh
$ npm run db:migrate
```

To rollback your migration (you might do this while you're testing whether a migration worked correctly):

```sh
$ npm run db:rollback
```

## 🤹‍ Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.

Middleware can be at the application level or at the router level.

## 📝 Git Flow

To begin working on a codebase, you first need to fork the repository. Forking creates your own personal copy of a repository where you can freely create branches and make changes without affecting the original repository. After creating a fork, `git clone` the remote fork locally and `npm install` dependencies (you only need to do this once).

For our team git (work)flow, our goal is for our master branch to be an up-to-date, single source of truth. This means that when we start working on our features, we always branch off the latest master, and when we finish our feature, we merge back into master so the rest of the team immediately has access to the latest code. In git terms, the git flow looks like: pull, branch, commit, rebase, PR, merge:

1.  Get latest master. Make sure your local repository is up-to-date with the remote repository by pulling (`git pull <remote>`) the latest master.

2.  Create feature branch. Instead of adding our new commits directly to master, we branch (`git checkout -b <name of branch>`) off master and work on our feature in an isolated branch. The branch should only contain changes relevant to that feature. If you need to work on another feature or a bug fix, create a new branch. Try to give your branch a descriptive name like “feat/adds-login-page”.

3.  Commit work. “Save” your work as you go by making commits (`git add <file>`, then `git commit -m “your descriptive message"`) to your feature branch. As commits are added to the branch it’s best practice to push those changes to your remote fork frequently (`git push <remote> <branch>`).
4.  Rebase. As you work, integrate your changes with master regularly by rebasing (`git rebase <branch>`). Rebasing changes the base of your branch to the last commit on the branch you are rebasing against, then replays your commits on top of it. Essentially, git history is rewritten so that your work is always added to the latest master. Note that when you rebase you may find yourself resolving merge conflicts if someone worked on similar areas of the codebase.
5.  Have your code reviewed. When a branch is ready to be merged (after rebasing and pushing your latest changes), open a pull request on the original remote repository (not your fork) to start the review process. Have a colleague review your pull request, discuss changes, and make any agreed upon revisions.
6.  Merge into master. Once the changes have passed the review process, merge them into the master branch!

## 🚒 Troubleshooting Docker

### 🔥 Hot Reloading isnt working

Sometimes, after you run `docker-compose up` you might notice that after making changes to your files, the server isn't reloading. In this case try running `docker-compose-up --build`. If that doesn't work try removing your machines and rebuilding from scratch.

### ☎️ Database connection issues

If you have any issues connecting to the database locally, delete your database machine and run `docker-compose up --force-recreate`.
