# react-test

This little React project was created after reading some blog postings and becoming convinced React is a good idea, 
but I use Parcel and that's not in my React books so I needed a sample for testing React ideas with Parcel.

A few days ago I progressed to publishing modules on npmjs.com,
so I added a map here to make sure that I could run through the full
cycle of publishing and consuming @map46/react-simplemap.

I wanted a way to try out Bootstrap 5 (which is in beta right now)
so today I updated the project and added it.

## Available Scripts

### Development

In the project directory, `npm start`
will run the app in the development mode.
The page will reload if you make edits.
It should open in a browser; if not the URL is [http://localhost:1234](http://localhost:1234)

You will also see any lint errors in the console; check for additional runtime errors in the browser debugger (usually opened with the F12 key).

The first time you run `npm start`, dependencies will be installed locally.

### Update git

When I do significant changes I bump the patch version number or possibly the minor version

If the current version in package.json is 0.1.9 then
````npm version patch```` would bump the third digit (eg 0.1.10)
and
````npm version minor```` would bump the second digit (eg 0.2.0)
and in either case, it's all pushed up to github.

The command fails if changes are left uncommitted, so 'git commit' first.

### Deployment

To deploy, first run the build command: `npm run build`

Output will be in the `build` folder. Parcel bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed; copy everything in `build` to your server.

The first time you run `npm run build` it will install cssnano to do the minification.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
