import { joinURL } from 'ufo';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  const path = event.path.replace(/^\/api\//, '');
  const targetUrl = joinURL(config.apiUrl, path);

  event.headers.set('Authorization', `Bearer ${config.apiSecret}`);

  return proxyRequest(event, targetUrl);
});
