// Configuration file for runtime environment variables
// This file exports configuration values that can be set at runtime

// Use the runtime configuration or fall back to default
export const API_BASE_URL = window.__CONFIG__?.apiBaseUrl || 'http://localhost:4000';
