//! Without having a defined mathcer, this single line of code applies next-auth to all API routes in your application.
export { default } from 'next-auth/middleware';

//! This applies next-auth ONLY to matching routes.
// Doc: https://next-auth.js.org/docs/app/building-your-application/routing/middleware
export const config = { matcher: ['/dashboard'] };
