# Klotzki Game

Implementation of the famous [Klotzki Game](https://en.wikipedia.org/wiki/Klotski), using React for frontend and Google App script as backend. 

<img src="klotzki.png" width="40%" />

## Open Source References

* [React 17](https://react.dev)
* [react-grid-layout 1.3.4](https://github.com/react-grid-layout/react-grid-layout)
* [babel-standalone 6.26.0](https://babeljs.io/docs/babel-standalone)
* [material-ui 5.11.14](https://mui.com)
* [Flaticons](https://www.flaticon.com)

## License
MIT

## Running the game

### Prerequisite

* [NodeJS]( https://nodejs.org/)
* Google account
* [Google Sheet](http://sheets.google.com)

### Steps

1. Clone the repo ```git clone https://github.com/aedelmann/klotzki.git```
2. Add your Google sheet ID to the file 'Sheet.gs' and save. 

``` 
const SPREADSHEET_ID = ADD YOUR GOOGLE SHEET ID HERE;
```

3. Install clasp

``` npm install -g @google/clasp ```

4. Login to clasp 

Run the following command in the terminal to log in with your Google account: ``` clasp login ```
This will open a browser window where you need to authorize clasp to access your Google account.

5. Create a new Google Apps Script project

To create a new Google Apps Script project named "Klotzki" run the following command in the terminal:

```clasp create "Klotzki" --type webapp```

6. Push changes

Push your changes to Google cloud app script server with ``` clasp push ``` 

7. Deploy application

``` clasp deploy ``` 

This command will create a new deployment of your web application. Take note of the deployment ID and web app URL shown in the terminal.
You can now access your web application by visiting the web app URL
