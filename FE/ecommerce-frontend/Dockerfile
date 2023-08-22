# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Create a production-ready lightweight web server (nginx)
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 3000

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
