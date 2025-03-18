# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /app

# Copy `package.json` to the working directory.
COPY path/to/package.json ./

# Install dependencies.
RUN npm install

# Copy all the files to the working directory.
COPY . .

# Specify the command to run the app.
CMD ["npm", "start"]
