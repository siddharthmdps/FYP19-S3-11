# Pegasus
SIM Online Recruitment using Cloud Computing

This project aims to develop an online automation system that is beneficial for SIM students and companies recruiting SIM graduates. This software has two login portals, one for students and the other for recruiting companies.

Students will enter all their personal as well as professional while registering themselves into the system. The students can also control the privacy settings of their accounts. The companies register with their company name, Job title, No. of vacancy, Job description, Job profile, Criteria, etc. The students can view and apply to the companies. The students will also be notified if job ads match with their interests and abilities, provided that they choose to make their information public. The companies can view the list of student profile who have applied to the particular company. An optional requirement is that the system allows users to communicate.

The admin of the system, has the access to all the portal. He handles all the logins credentials. The admin can add, delete or edit information when need be. The admin can also generate various reports (personal identity needs to be removed) for SIM management to understand the employability of SIM graduates.
All the details are stored in the cloud which is very easy to access for the user any time. As, the project files and a database file will be stored into the Azure cloud (or Amazon AWS), the project will be accessed in the web browser through Azure link.

## Installation

1. Install [NodeJS](https://nodejs.org/en/download/).
2. Clone the repository (It is recommended to test in a separate branch before committing to master)
3. Below, you will find two separate sections for setting up the frontend and backend.

## Front End
1. From the root directory, go to 'frontend' and type the command ```npm install```.
   This will install all dependencies required for the project.
2. type 'npm start' to start frontend page.

## Back End
1. From root directory, go to 'backend' and type the commmand ```npm install```,
   This will install all the dependencies required for the project
2. type 'node server.js' to start.
   Make sure mysql database is running before you start server.js
