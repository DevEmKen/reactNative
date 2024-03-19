# Base image for Node.js applications
FROM node:20

# Set working directory
# WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your server code
COPY . .

# Expose port for Apollo server (usually 4000)
EXPOSE 5000

# Start the server (replace "index.js" with your server entry point)
CMD [ "npm", "start" ]