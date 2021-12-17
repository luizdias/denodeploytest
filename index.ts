import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("Listening on http://localhost:8000");
serve((_req) => {
  let test = { "something": "test" }
  return new Response(test, {
    headers: { "content-type": "text/plain" },
  });
});
