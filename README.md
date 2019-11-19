# MB-PORTFOLIO


- **staging site: https://mattboylson.herokuapp.com/**
- **getting started with react: https://reactjs.org/docs/getting-started.html**
- **this project is based off the "Create React App Template: https://github.com/facebook/create-react-app**

---

## Development:

For for development, you will need to have node installed.

1. Install Node.js (if you haven't already): 

to check if you have Node installed, open a terminal and type: 
```
node -v
```

You should get a result like:


```
v10.16.0
```

If you do not have it installed, download and install node [here](https://nodejs.org/en/download/)

<br/>

2. Install Yarn

Yarn is the package manager used in this project. But it is not installed by default with Node. We can use Node's built-in `npm` command to install yarn.

We will install it globally so we can use the `yarn` anywhere. To install a package globally, you may need to run the following command as a superuser by using `sudo`.

NOTICE: using sudo might require an admin password



```
npm install -g yarn

--- or ---

sudo npm install -g yarn
```

- `npm install`: the installation command
- `-g`: the "global tag"
- `yarn`: the package we want to install

When the package successfully installs, we should be able to run:
```
yarn -v
```

This should give a result like:

```
1.15.2
```

<br/>


3. Clone this repository

```
git clone git@github.com:joeboylson/mb-portfolio.git
```

This should create a new folder called `mb-portfolio`. Move into that folder and run install the packages:

```
cd mb-portfolio
yarn install
```

This should take a few minutes.

<br/>

4. Start the development server:

To start the React Development server, run:

```
yarn start
```

The project should build, start, and the application should open in a new web browser (give it a few minutes to do this).

After this, you can start making changes and the server will reload by itself.

---

## Staging

Once you have made your changes, simply push your code to `master`. The Staging site will see that there have been changes made on the `master` branch in this repository and start a build process in the background. After that completes, your changes should be live on the staging site.

This all happens auutomatically: so the only step is to push to master (and then wait a few minutes)