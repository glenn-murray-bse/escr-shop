# SHOP

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli
    npm install -g web-component-tester-istanbul

Need at least v0.3.0

##### Setup

    git clone git@github.com:eat-sleep-code-repeat/escr-shop.git .
    npm install -g bower
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
* Check the existing published branches to see if there is a branch for the issue already.
* Create a new feature branch

	```git flow feature start 06-Sample-issue-to-demonstrate-gitflow-branch-naming```

### Commit your changes

	git add .
	git commit -am "A descriptive comment"

### Publish your branch so others can view your work
	
	git flow feature publish 06-Sample-issue-to-demonstrate-gitflow-branch-naming

### If you have new changes that need to be published you will now use the following

       git push

### Commit your new changes and merge with Develop branch

	git add .
	git commit -am "A descriptive comment"
	git pull origin develop

	Fix merge issues

	git add .
	git commit -am "A descriptive comment"
	git push

### Create a Pull Request on Github

	[Pull Request](https://github.com/eat-sleep-code-repeat/escr-shop/compare?expand=1)
	Assign it to at least one other person to review
	Watch the Travis CI Integration and make sure everything is green and healthy.
	DO NOT MERGE ON GitHub!!!

### Finish off the feature with GitFlow

	git flow feature finish -F 06-Sample-issue-to-demonstrate-gitflow-branch-naming

	This will merge your changes to Develop and delete both the local and remote branch for you.

### Push your merged Develop branch to gitHub.

	git push

### Automated testing through travic-ci

Changes pushed to branches will automatically be built on travi-ci using the .travis.yml file located in the root directory
Even if you do not have an account on travic-ci, you can still see the build at the following location:

        https://travis-ci.org/eat-sleep-code-repeat/escr-shop

### Automated Hosting through Firebase

Working on the configuration files for travis-ci to push changes to firebase when testing is successful.
