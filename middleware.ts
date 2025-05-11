import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  console.log("MIDDLEWARE HIT", req.url);
  // Extract the hostname to handle subdomains for production (admin subdomain or not)
  const hostname = req.headers.get("host") || "";

  // Check if the request is for the admin section (localhost or production subdomain)
  const isAdminRoute = req.url.startsWith('/admin') || req.url.includes('/admin');
  const isAdminSubdomain = hostname.startsWith('admin.');

  // Admin Route Access Control
  if (isAdminRoute || isAdminSubdomain) {
    console.log("ADMIN ROUTE HIT", req.url);
    const token = await getToken({ req });
    console.log("ADMIN TOKEN", token);
    if (!token) {
      // Redirect to admin login page if no token
      return NextResponse.redirect(new URL('/adminauth', req.url));
    }

    
    // Admin role check
    if (token.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url)); // Redirect to home if not an admin
    }
  }

  // User Route Access Control
  const isUserRoute = req.url.startsWith('/profile') || req.url.includes('/profile')

  console.log("USER ROUTE", isUserRoute);
  if (isUserRoute) {
    console.log("USER ROUTE HIT", req.url);
    const token = await getToken({ req });

    if (!token) {
      // Redirect to login page if no token
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    console.log(token.role)
    // User role check
    if (token.role !== 'user') {
      return NextResponse.redirect(new URL('/', req.url)); // Redirect to home if not a user
    }
  }

  // Allow the request to continue if checks pass
  return NextResponse.next();
}

// Config to apply the middleware on /admin and /profile routes
export const config = {
  matcher: [
    '/',
    '/admin', 
    '/admin/:path*', 
    '/profile', 
    '/profile/:path*'
  ],
};
