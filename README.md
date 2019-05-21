# ConnectedConsole
# gitHub
# Reactjs
Connected Console used by developers who wants to connect to Chrome devtools via React Terminal Component.
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is easy to use.
	
## Technologies
Project is created with:
* React version: 16.8.6
* Node version: 6.5.0
* Ament library version: 999
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../project_filename
$ npm i ConnectedConsole
$ npm start
```
 <Terminal
                    shortcuts={{
                      'darwin,win,linux': {
                        'ctrl + maj + I': 'echo whoo',
                      },
                    }}
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{fontWeight: "bold", fontSize: "1em"}}
                    commands={{
                      'open-google': () => window.open('https://www.google.com/', '_blank'),
                      showmsg: "Taper Google cmd",
                      'jsbin': () => window.open('https://jsbin.com/?html,css,js,output', '_blank'),
                      'npm-init': () => window.open('https://www.google.com', 'npm init'),
                      'courses': () => window.open('http://localhost:3000/Courses', '_blank'),
                      'welcome': () => window.open('http://localhost:3000/start', '_blank'),
                      'clear': () => window.clean(),

                      'print': () => window.print(console.log('alerteeeeeeeeeeeeeee')),
                      'write': () =>{eval(this.state.script)},
                      'file':  this.handleFile.bind(this),
                      'facebook': () => window.open('http://www.facebook.com', '_blank'),
                      'hello': {
                        method: (args, print) => {
                          print(`hello ${args._[0] || `${localStorage.getItem('username')}`}`);
                          if(args._[0]=='bash') {
                            print(` You 're Welcome ${localStorage.getItem('username')}`);
                          }
                        },
                        options: [
                          {
                            name: 'hello',
                            description: 'start word',
                            defaultValue: 'hi !',
                          },]
                      },
                      'echo': {
                        method: (args, print) => {
                          print(`echo : ${args._[0]}`);
                          alert('Echo :'+`echo : ${args._[0]}`);

                          if(args._[0]=='bash') {
                            print(` You 're Welcome ${localStorage.getItem('username')}`);
                          }
                        },
                        options: [
                          {
                            name: 'hello',
                            description: 'start word',
                            defaultValue: 'hi !',
                          },]
                      },
                      'filemaker': {
                        method: (args, print) => {
                          print(` ${args._[0] || `${localStorage.getItem('script')}`}`);

                        },
                        options: [
                          {
                            name:'filemaker',
                            description: 'run script code',
                            defaultValue: 'script !',
                          },]
                      } ,
                      'run': {
                        method: (args, print) => {
                          print(`code : ${args._[0] || `${this.state.script}`}`);
                          {args._[0]}
                          if(args._[0]=='script') {
                            // window.write(localStorage.getItem('script'))
                            <CodeComponent body={localStorage.getItem('script')}/>
                          }

                          if(args._[0]=='any') {
                            console.log(this.state.script);
                            print(`code : ${args._[0] || `${this.state.script}`}`);

                          }
                        },
                        options: [
                          {
                            name: 'run',
                            description: 'snippets',
                            defaultValue: 'hi !',
                          },]
                      },
                      'time': {
                        method: (args, print) => {
                          print(`it's ${args._[0] || `${this.state.date.toLocaleTimeString()}`}`);
                          if(args._[0]=='bash') {
                            print(` You 're Welcome  ${args._[0] || `${localStorage.getItem('username')}`}`);
                          }

                        },
                        options: [
                          {
                            name: 'time',
                            description: 'information about time',
                            defaultValue: 'Now!',
                          },]
                      },
                      color: {
                        method: (args, print) => {
                          print(`The color is ${args._[0] || args.color}`);
                        },
                        options: [
                          {
                            name: 'color',
                            description: 'The color the output should be',
                            defaultValue: 'white',
                          },
                        ],
                      },

//http://bgrins.github.io/devtools-snippets/#console-save
                      popup: () => alert('popup message you can run it')
                    }}
                    descriptions={{
                      'open-google': 'opens google.com',
                      showmsg: 'shows Command',
                      'jsbin': 'open jsbin online debugger',
                      'welcome': 'open start page',
                      'print': 'print page',
                      'write': 'write snippet / makefile script',
                      'facebook':'open facebook page',
                      'echo [text]': 'write string in console ',
                      'color [text]': 'color text ',
                      'time': ' date now KSA ',
                      alert: 'alert',
                      popup: 'Show Msg'
                    }}
                    watchConsoleLogging
                    msg='Nouha Version 1.1.0$ Copyright (c) 2018 - Tout droit réservé.'
                  />
