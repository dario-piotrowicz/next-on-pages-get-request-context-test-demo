'use client';

// NOTE: uncomment the getRequestContext code to see the compilation (in dev or build) fail

// import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export default function Client() {
    // const myVar = getRequestContext().env.MY_VAR;

    return (
        <>
            <h1>A simple Client component</h1>
            {/* <h2>{myVar}</h2> */}
        </>
    )
}
