# react-test

Simple react application that is used to test deployment workflow.

## Test

```bash
npm install
npm start
```

## Build

Build into the public/ folder. 

```bash
npm run build
```

Check the output into github, so that you can deploy
to any server that has a git client and a web server.

```bash
git push
```

### Test build

This command starts a server running on port 3000
so you can see if the build is working as you expected. Control-C to exit.

```bash
npm run serve
```

## Deploy

On the target host, in the folder accessible by your web server,
clone the project.

```bash
git clone https://github.com/brian32768/react-test.git test
```

It should be visible at https://yourhost/test/public/

## To do

There are probably lots of packages listed in package.json that could be removed.

