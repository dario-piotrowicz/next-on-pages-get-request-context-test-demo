import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export default function Server() {
    const myVar = getRequestContext<Env>().env.MY_VAR;

    return (
        <>
            <h1>A simple Server component</h1>
            <h2>{myVar}</h2>
        </>
    )
}
