# Use the official Node.js image as the base image
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /makurumidze_elwin_ui_garden_build_checks

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies (skip prepare/husky in CI)
RUN npm install --ignore-scripts

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /makurumidze_elwin_ui_garden_build_checks/build /usr/share/nginx/html

# Copy custom nginx configuration to serve on port 8018
RUN echo 'server { listen 8018; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]