# Contributing

Create `feature/<short-kebab-case-description>` from current `main`. Keep one
focused concern per branch, describe the user-visible behavior, and open a pull
request. Never rewrite published history to simulate a workflow.

Before review, run `npm ci`, `npm test`, `npm run typecheck`, and `npm run build`.
UI changes need desktop/mobile checks, readable contrast, keyboard focus, and a
reduced-motion check. Database changes need the isolated integration suite; never
run its club-schema fixture on a live database.

`main` requires one approving review, resolved conversations, and the
`Test, typecheck, and build` check on an up-to-date branch. Force pushes and branch
deletion are blocked. Use squash merges for a focused release history. Production
deploys automatically after a valid main push; failed checks leave the live site
in place. PR builds do not receive production credentials.

Keep Supabase queries in `lib/hackathon`, user interfaces in `app`/`components`,
and migrations in `database/hackathon`. Use user-scoped clients, schema-qualified
portal calls, and existing RLS/RPCs. Do not introduce club enrollment, member
points/payment code, or service-role credentials into the portal.

Secrets are configured directly in GitHub environment settings. Do not commit,
paste into issues/chat, or include them in logs. Preserve the independent SASE
deployment and follow the documented account-isolation release order.
