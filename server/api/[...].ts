import { joinURL } from 'ufo';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const path = event.path.replace(/^\/api\//, '');
  const targetUrl = joinURL(config.apiUrl, path);

  Object.assign(event.node.req.headers, {
    Authorization: `Bearer ${config.apiSecret}`,
  });

  return proxyRequest(event, targetUrl);
});
