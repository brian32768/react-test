This little React project was created after reading some blog postings,
it uses Parcel and that's not in my React books so I needed a sample for testing ideas.

## Available Scripts

### Development
In the project directory, `npm start`
will run the app in the development mode.
The page will reload if you make edits.
It should open in a browser; if not the URL is [http://localhost:1234](http://localhost:1234)

You will also see any lint errors in the console; check for additional runtime errors in the browser debugger (usually opened with the F12 key).

The "babel" packages under devDependencies in package.json are automatically added the first time I ran `npm start` because React needs them, so I left them in. If you delete them then npm will just add them back in.

### Deployment
To deploy, first run the build command: `npm run build`

Output will be in the `build` folder. Parcel bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed; copy everything in `build` to your server.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
