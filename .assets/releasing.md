# General
Currently, the app is released to Azure via Github.

# Proceeding
## General
- Go to Azure Portal and log in
- New Resource --> Web + Mobile --> Web App
- Create Resource
- Navigate to the Resource
- Deplyoment Sub-Tab --> Quickstart
- Select Node.js
- Cloud based Source control
- Follow the guided steps to configure

## Specific folders
The Angular CLI build by default to a dist-folder, therefore we should configure Azure to deploy from this one:
- Navigate to the Resource
- Select Settings --> Application Settings
- On the App Settings, create a variable called *Project* with the relative path, for example "dist"
- Check, that the folder is not in .gitignore
