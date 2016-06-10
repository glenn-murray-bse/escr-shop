#!/bin/bash

#FIREBASE_PROJECT_VINCE=$1
#FIREBASE_TOKEN_VINCE=$2
TRAVIS_BRANCH=$3

# Test the branch and deploy where needed
if [[ ${TRAVIS_BRANCH} == *"feature"* ]]
then
	echo "Feature branch does not get deployed to firebase"
elif [[ ${TRAVIS_BRANCH} == *"develop"* ]]
then
	echo "Deploy to dev firebase environment"
	firebase deploy --project "${FIREBASE_PROJECT_VINCE}" --token "${FIREBASE_TOKEN_VINCE}"
elif [[ ${TRAVIS_BRANCH} == *"master"* ]]
then
	echo "Master branch deploy to production"
	firebase deploy --project "${FIREBASE_PROJECT_PROD}" --token "${FIREBASE_TOKEN_PROD}"
else
	echo "Unknown branch type...not deploying"
fi

