# Use Node 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app
# Copy backend package.json and package-lock.json
COPY /package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend code to the container
COPY . .


# Expose port for the backend (assuming your backend uses port 4000)
EXPOSE 4000

# Start the backend
CMD ["npm", "start"]
