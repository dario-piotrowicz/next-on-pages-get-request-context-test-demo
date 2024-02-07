import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export default function Server() {
    const { env: { MY_VAR }, cf } = getRequestContext();

    return (
        <>
            <h1>A simple Server component</h1>
            <h2>MY_VAR = {MY_VAR}</h2>
            <h2>colo = {cf.colo}</h2>
        </>
    )
}
