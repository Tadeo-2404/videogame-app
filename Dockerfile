# Use the official Node.js LTS image as the base image
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use the official Nginx image to serve the built app
FROM nginx:latest

# Copy the built app from the previous stage to the Nginx container
COPY --from=builder /app/dist/video-game-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]