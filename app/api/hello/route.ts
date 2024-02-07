// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  let responseText = 'Hello World'

  const myKv = getRequestContext().env.MY_KV;
  await myKv.put('suffix', ' from a KV store!')
  const suffix = await myKv.get('suffix')
  responseText += suffix

  return new Response(responseText)
}
