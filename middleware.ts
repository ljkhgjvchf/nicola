import { rewrite } from '@vercel/functions';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';
  const isApex = host === 'convertleads.xyz' || host === 'www.convertleads.xyz';

  if (!isApex) return;

  if (url.pathname === '/' || url.pathname === '/it' || url.pathname === '/it/') {
    return rewrite(new URL('/ai-landing/it/index.html', request.url));
  }
  if (url.pathname === '/en' || url.pathname === '/en/') {
    return rewrite(new URL('/ai-landing/index.html', request.url));
  }
}

export const config = {
  matcher: ['/', '/it', '/en'],
};
