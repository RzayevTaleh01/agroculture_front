import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {locales} from '@/config';

export default async function middleware(request: NextRequest) {

  const defaultLocale = request.headers.get('agroculture-locale') || 'az';

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale
  });
  const response = handleI18nRouting(request);

  response.headers.set('agroculture-locale', defaultLocale);
  return response;
}

export const config = {
  matcher: ['/', '/(az|en)/:path*']
};