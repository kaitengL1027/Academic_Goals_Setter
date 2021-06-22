# Academic Goals Setter - Read Me

A course managing app built on Ionic which allows students to add a course, its objectives (goals), and filter by course names. The goals can then be updated / deleted. 

## Installation

* Make sure you have `node.js` installed
* `sudo npm install -g @ionic/cli` to install Ionic's command line interface globally
* `cd` into your project's folder, and `npm i` to install all the required packages and dependencies

### For building a web app: 

* `npm run build` optimizes and builds the project
* `ionic serve` to run the development server

### For building an Andriond app:

* Install Android Studio and its latest stable SDK through the Android Studio's installation process
* Adroid Studio -> SDK Manager -> SDK Tools tab, check  

`Android Emulator`  
`Android SDK Platform-Tools`  
`Android SDK Tools`  
`Android SDK Build-Tools`  

then apply changes
* Android Studio -> AVD Manager, add a desired virtual device for testing
* (For macOS & Linux) Set the `ANDROID_SDK_ROOT` environment variable:  

`export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk`  

in the `~/.bashrc`, `~/.bash_profile` or `~/.zshrc` file, then source it
* `ionic integrations enable capacitor` to use capacitor
* `ionic capacitor add android` to add Android support
* `ionic capacitor copy android` to build the app
* `npx cap open android` to open the project in Android Studio
* Run the application in desired virtual device, or in your phone in USB debug mode

### For building an iOS app (macOS only): 

* `ionic integrations enable capacitor` to use capacitor
* Install Xcode
* `xcode-select --install` to make sure the command-line tools are selected for use
* Xcode -> Preferences -> Accounts, make sure your Apple ID is shown
* Xcode -> Window -> Devices and Simulators, make sure to have at least 1 simulator
* `ionic capacitor add ios` to add iOS support
* `npx cap open ios` to open the project in Xcode
* Xcode -> App -> Signing & Capabilities -> Team, select your Apple ID
* `ionic capacitor copy ios` to build the app
* Select the desired simulator in Xcode, run the app by pressing the play button

## App Flow

Welcome to Academic Goals Setter! 

Add a course to the app, pick an enrolment date, then save it. 

<img src="/public/assets/gifs/add_course.gif" width="350"/>

Add the goals you would like to achieve in this course, then save it. You can see an overview of all the goals related to its courses in the All Goals tab

<img src="/public/assets/gifs/add_goal.gif" width="350"/>

You can filter what you would like to see in the All Goals tab by toggling courses in the filter. 

<img src="/public/assets/gifs/filter.gif" width="350"/>

You can also delete or update existing goals by sliding left and right. 

<img src="/public/assets/gifs/update_delete.gif" width="350"/>

## Tech Stack
This project used ReactJs, TypeScript, JavaScript and CSS. 

useState, useEffect, useRef, useContext, useHistory, useParams hooks were used. 
