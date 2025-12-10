FROM node:18

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Start the app
CMD ["node", "INDEX.js"]




