import { rewrite } from '@vercel/functions';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  if (url.pathname === '/' && (host === 'convertleads.xyz' || host === 'www.convertleads.xyz')) {
    return rewrite(new URL('/ai-landing/index.html', request.url));
  }
}

export const config = {
  matcher: '/',
};
