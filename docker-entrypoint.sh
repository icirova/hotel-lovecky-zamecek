#!/bin/sh
set -e

# Replace the API_BASE_URL placeholder in the index.html file
sed -i "s|%%API_BASE_URL%%|${API_BASE_URL:-http://localhost:4000}|g" /app/dist/index.html

# Execute the original entrypoint
exec "$@"
