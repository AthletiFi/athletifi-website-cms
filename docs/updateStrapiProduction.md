# AthletiFi Website CMS Update Guide

This guide provides a comprehensive walkthrough for updating or adding collections to the AthletiFi Website CMS using Strapi. It outlines the steps required to make changes locally and deploy them to the production environment efficiently and effectively.

## Prerequisites

- Ensure you have access to the AthletiFi GitHub repository.
- Verify SSH access to the AthletiFi Strapi AWS EC2 instance. Contact Quentin if access is needed.
- Familiarity with Git, Strapi UI, and TypeScript for direct schema modifications.

## Local Development

1. **Clone the Repository**
   - Execute `git clone git@github.com:AthletiFi/athletifi-website-cms.git` to clone the `athletifi-website-cms` repository locally.

2. **Modify or Create New Collections**
   - **Option 1: Using Strapi UI (Recommended for Non-Developers)**
     1. Initialize a local instance of Strapi. Configure a local database and create a new admin account.
     2. Access the Strapi UI by logging into the local instance via `localhost`.
     3. Utilize the UI to modify existing collections or create new ones as needed.
   - **Option 2: Direct Schema Modification (For Developers)**
     - Directly modify the schema files in TypeScript. This method does not require setting up a local Strapi instance or database but requires knowledge of Strapi's schema structure.

3. **Commit and Push Changes**
   - After modifications, commit the changes and push them to the `main` branch of the repository.

4. **Prepare for Production**
   - Merge changes from the `main` branch into the `prod` branch, which is used for deployment to the production environment.

## Deploying to Production

1. **SSH into the Strapi AWS EC2 Instance**
   - Use `ssh ubuntu@3.128.97.221` to access the production server. Ensure you have the necessary SSH permissions.

2. **Stop the Current Strapi Process**
   - Execute `pm2 stop ecosystem.config.js` to halt the current Strapi process. Here are the alternate commands for different scenarios:
     - `pm2 stop athletifi-website-cms/ecosystem.config.js` if you're outside the directory.
     - `pm2 stop all` to stop all PM2 managed processes.
     - `pm2 stop strapi` if you have named your process 'strapi'.

3. **Update the Repository**
   - Navigate to the project directory (`cd athletifi-website-cms`) if not already there, and pull the latest changes from the `prod` branch using `git pull origin prod`.

4. **Build the Project**
   - Run `yarn build` to compile the latest changes. If the build process fails, follow these steps to run the build with elevated permissions:
     1. Enter superuser mode with `sudo su -`.
     2. Navigate to the project directory with `cd /home/ubuntu/athletifi-website-cms`.
     3. Attempt the build again using `yarn build`.
     4. Exit superuser mode with `exit`.

5. **Restart Strapi**
   - Use `pm2 start ecosystem.config.js` to relaunch the Strapi process.

6. **Verify the Status**
   - Confirm the successful restart by checking the PM2 process status with `pm2 list` or `pm2 status`.

## Notes

- Ensure all changes are thoroughly tested in a development environment before deploying to production.
- Regularly back up the production database to prevent data loss during updates.
- Keep the production environment's details confidential and secure.

For further assistance or clarification on specific steps, please contact the development team or Quentin.