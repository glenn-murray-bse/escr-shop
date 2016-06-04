# SHOP

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli
    npm install -g web-component-tester-istanbul

Need at least v0.3.0

##### Setup

    git clone git@github.com:eat-sleep-code-repeat/escr-shop.git .
    bower install 
    
### Start the development server (use -o to open a new browser)

    polymer serve

### View the documentation and demos at

	[Docs](http://localhost:8080/docs.html)

### Run web-component-tester tests with code coverage

    polymer test --plugin web-component-tester-istanbul

### Build

    polymer build

### To contribute code changes use Git Flow
	
	https://github.com/nvie/gitflow/wiki/Installation

### Start a new feature branch.  

* Go to https://github.com/eat-sleep-code-repeat/escr-shop/issues and pick an issue to work on.
* Check the existing published brnaches to see if there is a branch for the issue already.
* Create a new feature branch
	
	git flow feature start 06-Sample issue to demonstrate gitflow branch naming

### Commit your changes

	git add .
	git commit -am "A descriptive comment"

### Publish your branch so others can view your work
	
	git flow feature publish 06-Sample issue to demonstrate gitflow branch naming