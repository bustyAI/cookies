# Defines our base image
FROM node:20.16.0

# Changing to the app directory
WORKDIR /app

# Copies our package.json and package-lock.json files
COPY package*.json ./

# Run the command to install dependencies
RUN npm install

# Copying the rest of the application
COPY . .

# Expose our port that our app will run om
EXPOSE 3000

# Commands to run the application
CMD [ "npm", "run", "dev" ]