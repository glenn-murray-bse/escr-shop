#!/bin/bash

#FIREBASE_PROJECT_VINCE="escr-shop-dev"
#FIREBASE_TOKEN_VINCE="1/QGZ73kIZI9BbP17zM_xkha5XWsuJqhXx-nHAYqj3rDE"
BRANCH=`git branch | sed -n -e 's/^\* \(.*\)/\1/p'`

# Test the branch and deploy where needed
if [[ ${BRANCH} == *"feature"* ]]
then
	echo "Feature branch does not get deployed to firebase"
elif [[ ${BRANCH} == *"develop"* ]]
then
	echo "Deploy to dev firebase environment"
	firebase deploy --project "${FIREBASE_PROJECT_VINCE}" --token "${FIREBASE_TOKEN_VINCE}"
elif [[ ${BRANCH} == *"master"* ]]
then
	echo "Master branch deploy to production"
	firebase deploy --project "${FIREBASE_PROJECT_PROD}" --token "${FIREBASE_TOKEN_PROD}"
else
	echo "Unknown branch type...not deploying"
fi
