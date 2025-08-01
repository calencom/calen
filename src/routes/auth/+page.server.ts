import { redirectIfAuthenticated } from "$lib/server/auth/auth-helpers";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request }) => {
  await redirectIfAuthenticated(request);

  const seo = {
    title: "Auth | Thirty",
    url: "https://thirty.c/auth",
    description: "Automate your calendar with AI — just type what you need, and it's done.",
    image: "https://hqqk5u623c.ufs.sh/f/iKaDWWmT042q17NthmSV2O87Dfkbp9I0KZuQP5exwUAgMGsJ",
    twitterHandle: "@sithucodes"
  };

  return { seo };
};
