// Configuration file for environment variables
// This file exports configuration values that can be set via environment variables

// Use the environment variable from window.env (runtime) or import.meta.env (build time) or fall back to default
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
