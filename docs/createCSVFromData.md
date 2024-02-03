
# Strapi PostgreSQL Data Export to CSV Guide

This guide outlines the steps to export data from a PostgreSQL database used by Strapi into a CSV file, including initial steps to find database credentials and establishing a TCP/IP connection.

## Prerequisites

Ensure you have access to the server where your Strapi application and PostgreSQL database are hosted.

## Steps

### 1. Find Database Credentials

Your Strapi application's database credentials are stored in the `.env` file located in the root directory of your Strapi project. You need to look up the following information:

- **Database Name**: `DATABASE_NAME`
- **Database Username**: `DATABASE_USERNAME`
- **Database Password**: `DATABASE_PASSWORD`

Example:

```plaintext
DATABASE_NAME=strapidatabase
DATABASE_USERNAME=strapiadmin
DATABASE_PASSWORD=yourpassword
```

### 2. Connect to PostgreSQL Database

Instead of connecting through the Unix socket, which can lead to permissions issues, connect using TCP/IP to avoid `peer authentication failed` errors.

1. Open your terminal.
2. Use the `psql` command with specified host to connect:

```bash
psql -d strapidatabase -U strapiadmin -h localhost -W
```

- Replace `strapidatabase` with your actual database name.
- Replace `strapiadmin` with your database username.
- `-h localhost` forces the connection over TCP/IP.
- `-W` prompts for the password.

Enter the password when prompted.

### 3. Export Data to CSV

Due to permission issues with writing files directly from the PostgreSQL server process, use the client-side `copy` command.

1. Determine the table you wish to export, for example, `summer_select_signups`.
2. Execute the `copy` command in the `psql` interface:

```sql
copy (SELECT * FROM summer_select_signups) TO '/tmp/select-signups-feb032023.csv' WITH CSV HEADER;
```

This command exports the contents of `summer_select_signups` to a CSV file named `select-signups-feb032023.csv` in the `/tmp` directory. We used the `/tmp` directory to avoid permission issues.

### 4. Securely Move the CSV File

After successfully creating the CSV file, move it from the `/tmp` directory to a more secure location, like your home directory.

```bash
sudo mv /tmp/select-signups-feb032023.csv /home/ubuntu/select-signups-feb032023.csv
```

Ensure you replace `/home/ubuntu` with the actual path to your desired directory.

## Conclusion

You have now successfully exported data from your Strapi PostgreSQL database to a CSV file using a TCP/IP connection and the `copy` command, overcoming common permission issues.

