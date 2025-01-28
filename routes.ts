/**
 * An array of routes that are publicly accessible
 * These routes will be accessible with / without authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];
/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in in users to the default redirect path
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes start start with this prefix are used for API authentication process
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 *  The default redirect path after a successful login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
