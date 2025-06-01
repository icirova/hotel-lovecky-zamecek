FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json* .
RUN npm ci

COPY . .

# Copy the entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose the port used by the prod script
EXPOSE 3000

# Use the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["npm", "run", "prod"]
