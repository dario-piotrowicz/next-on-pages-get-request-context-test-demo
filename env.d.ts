declare global {
  var cloudflare: { env: Env, ctx: ExecutionContext, cf: IncomingRequestCfProperties };

  interface Env {
    // KV Example:
    MY_KV: KVNamespace
  }
}

export {}

