import { UNSAFE_SingleFetchRedirectSymbol } from "react-router";
import { encode } from "turbo-stream";

function getSingleFetchRedirect(status: number, headers: Headers) {
  const redirect2 = headers.get("Location");
  return {
    redirect: redirect2,
    status,
    revalidate: headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie"),
    reload: headers.has("X-Remix-Reload-Document"),
    replace: headers.has("X-Remix-Replace"),
  };
}

export function singleFetchRedirect(response: Response) {
  const result = {
    [UNSAFE_SingleFetchRedirectSymbol]: getSingleFetchRedirect(response.status, response.headers),
  };

  const body = encode(result, {
    plugins: [
      (value) => {
        if (value && typeof value === "object" && UNSAFE_SingleFetchRedirectSymbol in value) {
          return ["SingleFetchRedirect", value[UNSAFE_SingleFetchRedirectSymbol]];
        }
      },
    ],
  });

  const headers = new Headers(response.headers);
  headers.set("Content-Type", "text/x-script");
  headers.set("X-Remix-Response", "yes");

  return new Response(body, {
    status: 202,
    headers,
  });
}
