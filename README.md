# Virote

App for creating UAV missions.

## You can see the React [Front-end HERE!](https://zrafaf.github.io/virote/src/web/build/index.html)
> This is a static version of the app, without access to the server, therefore most features won't work.

* Front-end with JavaScript using [React](https://reactjs.org/)
* Backend with Python using [eel](https://github.com/python-eel/Eel)

It uses the protocol [MavLink](https://mavlink.io/en/) to communicate with the UAV, through the python library [Pymavlink](https://github.com/ArduPilot/pymavlink)

___

# Documentation

## You can find the documentation in [https://zrafaf.github.io/virote/](https://zrafaf.github.io/virote/)

* ### [Download automatically generated PDF](https://github.com/zRafaF/virote/raw/gh-pages/pdf/document.pdf)

___

# Building

First you will need:
* [Python 3](https://www.python.org/)
* pip
* [npm](https://www.npmjs.com/)

Start by installing all the dependencies using

`npm run installDep`

> It will install the front-end and backend dependencies.

## Running

As for running the program we have a few options:

* Run only the frontend `npm run startWeb`

* Run only the backend `npm run startEel`

* Serve the full application `npm run serve`
    > This command will start the eel as headless and start the web serve, it doesn't need to build the front end before executing. **Less performant**.


* Run the full application `npm run start`
    > With this command it will first build the react front end, then run the python script.

* Build the react frontend `npm run buildWeb`

* Build binaries. `npm run buildBin`
> * You can build the "binaries", more like a python environment wrapper, it uses [PyInstaller](https://pyinstaller.org/en/stable/) to generate the bins.
> * The output path is `bolinho/src/dist/`
