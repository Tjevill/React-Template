# React App template

Template for starting building react app.
React Redux is implemented and ready to go.
Comes with backend created with node/express.

## `$cd frontend ---> $npm install ---> $npm start`

Install app dependencies.
Start the app.

## `$cd server --> $npm install --> $npm start`

Install server dependencies.
Start the server.

## Optional [airbnb](https://github.com/airbnb/javascript) code style (Visual Studio Code):

1. Download the ESLint and Prettier extension for VSCode.
2. Install the ESLint and Prettier libraries into our project. In your project's
   root directory, you will want to run `$npm install -D eslint prettier`.
3. Install the [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). If you have npm 5+, you can run
   `npx install-peerdeps --dev eslint-config-airbnb`.
4. `npm install -D eslint-config-prettier eslint-plugin-prettier`.
5. Create `.eslintrc.json` file in your project's root directory:

```
{
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "rules":{
        "prettier/prettier":["error"]
    },
}
```

6. Create `.prettierrc`file in your project's root directory.
7. Make sure Prettier formats on save. Insert `"editor.formatOnSave": true`.

###### Source: [Medium, Jeffrey Zhen](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
