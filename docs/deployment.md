# Separate LumaHacks deployment

- Team: `sase-ucfs-projects` (`team_OoQo7dCwu9dcrSP5YMpSqZBq`).
- Project: `lumahacks` (`prj_7zSC9Gj0hbIHguEzri8D6IQaVtkz`).
- Dashboard: https://vercel.com/sase-ucfs-projects/lumahacks
- Production alias: https://lumahacks.vercel.app
- Initial source: `f1dd8483f7e70781b10da28e226c8597d64f4833`.
- Runtime: Node.js 22, Next.js preset, repository root.

The initial deployment uploads the exact tracked standalone portal source through
the Vercel API. It does not connect a GitHub login to the shared Vercel account.
The separate `saseweb` project and `ucfsase.com` domain are not changed.

Deployment `dpl_HecLJAvFWMN4rgXYcd2tGoK4FgPm` reached READY; Vercel ran tests,
type checking, and the production build successfully. An authenticated homepage
request returned HTTP 200. Production currently retains Vercel team-login
protection: making it public requires explicit approval after automatic approval
review rejected that access change. Registration remains unavailable by design.

## CI/CD activation

The prepared workflow runs tests, TypeScript checking, and a production build for
pull requests and pushes to `main`. Pushes to `main` deploy after validation;
manual runs can stage a preview. Production is staged and its homepage checked
before promotion. PRs never receive deployment credentials.

Before activating deployment, protect `main` with required PR reviews and the
`Test, typecheck, and build` check. Create GitHub environments named `production`
and `preview`, configure required maintainers as reviewers, and restrict
production to `main`. Store a team-scoped Vercel token as `VERCEL_TOKEN` in both
environments, not in source or chat. Review the exact commit before approving a
preview, because builds execute repository code with environment configuration.
GitHub write access is needed to publish this branch and activate the workflow.

## Database isolation verified on November 22, 2026

The portal uses the existing `Saseweb` Supabase project, but its adapter explicitly
selects `client.schema("hackathon")`. Applications, teams, check-ins, staff, and
content live under that schema. Applications reference shared `auth.users`, not
`public.profiles`. Browser sessions use `hackathon-auth`; portal callbacks do not
call club enrollment, welcome-email, points, or payment code.

Only the public Supabase URL/key and `NEXT_PUBLIC_HACKATHON_SLUG=lumahacks` are set
on this Vercel project. No service-role key is installed.

The live shared Auth signup trigger still creates club profiles for every new
account. Accordingly, `hackathon.portal_configuration.account_isolation_ready`
remains false, the portal disables authentication, and application submission is
blocked by the database. Do not flip that flag or apply migration `002` until the
updated club login code is deployed and verified. Follow the coordinated release
order in `database/hackathon/README.md`. Preserve the club Auth Site URL, callbacks,
provider configuration, and SMTP settings.

Read-only checks found 245 club profiles, 404 club attendance records, zero
hackathon applications, no published hackathon, and empty school/country/terms
catalogs. No database rows, triggers, RLS policies, API exposure, or Auth settings
were changed during deployment. Public event announcements can be served while
registration remains closed. The full authenticated portal still requires the
documented cutover, schema exposure, event/catalog/terms setup, callback allowlist,
and live end-to-end tests before opening applications.
