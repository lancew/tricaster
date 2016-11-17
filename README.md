# tricaster
Experimentations with the Newtek Tricaster

![Image of Tricaster App](tricaster/tricaster.png)

Initial test was using the tricaster webserver to get the preview images from the inputs on a webpage. See tricaster.html (which assumes tricaster is on 192.168.2.80)

Next step was to try the remote control API.

The remote control API is XML based TCP/IP socket comms. Does allow web sockets.

First experiments are ugly node hacks, where I successfully preview then transition ("auto", rarher than "take") the DDR1 and Mix Effects 1 and 2.

Next step is to create a web app that allows a user to click a button and do the normal actions.

For me this is:

* m/e 1 = contest area 1 (with graphics)
* m/e 2 = contest area 2
* m/e 8 = Commentary Studio
* ddr 1 = Action Replay.

Then on Mix Effect 7 (Jumbotron output):

* input 3 = PGM
* input 6 = contest area 1 (Referee replay)
* input 7 = contest area 2 (Referee replay)

Build the electron apps:

cd electron
electron-packager . --all
