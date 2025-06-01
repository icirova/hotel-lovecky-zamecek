
# Hotel Lovecký Zámeček

## About
A React application for Hotel Lovecký Zámeček.

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build and run production preview (on port 3000)
npm run prod
```

## Environment Variables

The application is configured using the `API_BASE_URL` environment variable, which can be set at runtime.

### Local Development

For local development, the default API base URL is `http://localhost:4000`. No additional configuration is needed.

### Docker Runtime

When running the Docker container, you can set the API base URL using an environment variable:
```bash
docker run -p 8080:3000 -e API_BASE_URL=http://api.example.com your-username/hotel-lovecky-zamecek:latest
```

This is particularly useful for Docker Compose environments where you need to configure the application based on the environment it's running in.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:
1. Builds and tests the JavaScript application
2. Extracts metadata for Docker image (tags, labels)
3. Builds and pushes a Docker image to Docker Hub with appropriate tags and labels

The Docker image is tagged with:
- `latest` - Always available
- Branch name (e.g., `main`)
- Git tag (when a tag is pushed)
- Git SHA (commit hash)

This metadata extraction improves traceability and versioning of Docker images.

### Setting up GitHub Secrets

To enable Docker Hub deployment, add these secrets to your GitHub repository:
- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token (not your password)

### Docker

The application is containerized using Docker. The image is available on Docker Hub.

To run the container locally:
```bash
# Pull the latest version
docker pull your-username/hotel-lovecky-zamecek:latest

# Or pull a specific version by tag or commit SHA
# docker pull your-username/hotel-lovecky-zamecek:main
# docker pull your-username/hotel-lovecky-zamecek:v1.0.0
# docker pull your-username/hotel-lovecky-zamecek:sha-a1b2c3d

# Run the container
# You can set the API base URL at runtime using an environment variable
docker run -p 8080:3000 -e API_BASE_URL=http://api.example.com your-username/hotel-lovecky-zamecek:latest
```

Then access the application at http://localhost:8080

The application is configured to bind to all network interfaces (0.0.0.0) inside the container, making it accessible from outside the container. This ensures the web application is visible when running in Docker.

### Docker Compose

You can also use Docker Compose to run the application. A `docker-compose.yml` file is included in the repository:

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    image: your-username/hotel-lovecky-zamecek:latest
    ports:
      - "8080:3000"
    environment:
      - API_BASE_URL=http://api.example.com
```

Run with:
```bash
docker-compose up
```

The `docker-compose.yml` file includes commented options that you can uncomment to build from the local Dockerfile or to add an API service.

# Zdroje fotografií
Image by <a href="https://pixabay.com/users/davidjonasfrei-14735032/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4718358">David-Jonas Frei</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4718358">Pixabay</a>

Image by <a href="https://pixabay.com/users/leemelina08-2806126/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1622401">leemelina08</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1622401">Pixabay</a>

Image by <a href="https://pixabay.com/users/stubaileyphoto-19245286/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5772286">Stuart Bailey</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5772286">Pixabay</a>

Image by <a href="https://pixabay.com/users/erikawittlieb-427626/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1078923">ErikaWittlieb</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1078923">Pixabay</a>

Image by <a href="https://pixabay.com/users/3534679-3534679/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3475656">3534679</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3475656">Pixabay</a>

Image by <a href="https://pixabay.com/users/edvaldocostacordeiro-6474269/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3042835">edvaldocostacordeiro</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3042835">Pixabay</a>

Image by <a href="https://pixabay.com/users/neshom-447256/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=449952">Nenad Maric</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=449952">Pixabay</a>

Image by <a href="https://pixabay.com/users/buffetcrush-4147660/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2009590">지원 이</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2009590">Pixabay</a>
