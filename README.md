README
======

Description
-----------------

WebSockets Stress Test - Tool written in NodeJS that allows to make a stress test
for your application that uses WebSockets. You can create behavior scenarios that
tool will run on every connection in test.

Installation
------------

cd websockets-stress-test

npm install

node wsst.js -h


node wsst.js --connections 50 ws://104.239.231.22 scenarios/realScenario.js
