# week-11-learn

This project is a learning resource for Docker. It includes a PostgreSQL database and a Node.js application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Docker and Docker Compose installed on your machine.

### Installation

1. Clone the repository:

https://github.com/ikramsyawal/week-11-learn

2. Navigate to the project directory:

cd week-11-learn

3. Run Docker Compose:

docker compose up

### Database Setup

After running `docker-compose up`, you need to create, migrate, and seed the database.

1. Access the PostgreSQL database from your host machine on port 5439.

2. Run the following commands to create and setup the database:

npx sequelize-cli db:create --env docker
npx sequelize-cli db:migrate --env docker
npx sequelize-cli db:seed:all --env docker

### Running Tests

To run the unit tests inside the Docker container, use the following command:

npm run docker-test
