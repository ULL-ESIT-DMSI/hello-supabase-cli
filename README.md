# Supabase

## Quickstart

Create your first API route by creating a table called `todos` to store tasks.

See the tutorial <https://supabase.com/docs/guides/api/quickstart>

Build an API route in less than 2 minutes.


## JavaScript Library Reference Guide

See <https://supabase.com/docs/reference/javascript/>

Covers 
- [AUTH](https://supabase.com/docs/reference/javascript/auth-api), 
- [DATABASE](https://supabase.com/docs/reference/javascript/select), 
- [STORAGE](https://supabase.com/docs/reference/javascript/storage-createbucket), 
- [EDGE FUNCTIONS](https://supabase.com/docs/reference/javascript/functions-invoke), 
- [REALTIME](https://supabase.com/docs/reference/javascript/subscribe).


## Auto-generated documentation

See <https://supabase.com/docs/guides/api/rest/auto-generated-docs>

For instance, using the `TODO`s table created in the [previous section **Quickstart**](#quickstart) we can use the fact that Supabase generates documentation in the Dashboard which updates as you make database changes.

1. Go to the [API](https://supabase.com/dashboard/project/_/api) page in the Dashboard.
2. Select any table under Tables and Views in the sidebar.
3. Switch between the JavaScript and the cURL docs using the tabs.

I have used it to build a program like the one in [hello.mjs](hello.mjs):

```js
➜  hello-supabase-clie git:(main) npm run hello.mjs
> hello-supabase-clie@1.0.0 hello.mjs
> node hello.mjs

[
  { id: 1, task: 'Create tables' },
  { id: 2, task: 'Enable security' },
  { id: 3, task: 'Add data' },
  { id: 4, task: 'Fetch data from the API' },
  { id: 5, task: 'comprar manzanas' },
  { id: 6, task: 'comprar peras' },
  { id: 7, task: 'preparar café' },
  { id: 8, task: 'dar la clase DMSI' }
]
```

## References

* [Supabase docs](https://supabase.com/docs)
* Supabase cli: <https://supabase.com/docs/guides/cli/getting-started?platform=npx>

## Supabase CLI

```
➜ supabase login
Hello from Supabase! Press Enter to open browser and login automatically.
```
After I press `enter`:
```
Here is your login link in case browser did not open https://supabase.com/dashboard/cli/login?session_id=d9fbe58d-...&public_key=04187...

Token cli_casianorodriguezleon@pacham.local_... created successfully.

You are now logged in. Happy coding!
```

```
$ supabase projects list


    LINKED │        ORG ID    │     REFERENCE ID     │            NAME            │      REGION       │  CREATED AT (UTC)
  ─────────┼──────────────────┼──────────────────────┼────────────────────────────┼───────────────────┼──────────────────────
           │ ff............qz │ hcxpeedmwtfkdwijmpvl │ nextjs-auth-helpers-videos │ West EU (Ireland) │ 2023-12-14 13:13:40
           │ ff............qz │ bdtgljrnoacxfkctszfz │ lab-nextjs13               │ West EU (London)  │ 2023-12-12 12:51:40
```


### Full command reference

The CLI provides a number of commands to help you develop your project locally and deploy to the Supabase Platform. You can find all commands inside the [CLI Reference](https://supabase.com/docs/reference/cli/introduction) docs, including:

- [Project](https://supabase.com/docs/reference/cli/supabase-projects) and [Organization](https://supabase.com/docs/reference/cli/supabase-orgs) management
- [Database management](https://supabase.com/docs/reference/cli/supabase-db)
- [Database migrations](https://supabase.com/docs/reference/cli/supabase-migration) and [Database Branching](https://supabase.com/docs/reference/cli/supabase-branches)
- [Database debugging tools](https://supabase.com/docs/reference/cli/supabase-inspect-db-calls)
- [Edge Function management](https://supabase.com/docs/reference/cli/supabase-functions)
- [Auth management](https://supabase.com/docs/reference/cli/supabase-functions)
- [Types Generators](https://supabase.com/docs/reference/cli/supabase-gen)
- [Testing](https://supabase.com/docs/reference/cli/supabase-test)


## Documentation of Supabase

The documentation of Supabase is written in [Next.js 13.5](https://github.com/supabase/supabase/blob/master/apps/docs/package.json) and can be found in:

* <https://github.com/supabase/supabase/tree/master/apps/docs>
* <https://github.com/supabase/supabase/tree/master/apps/docs/pages> See the mdx files
* <https://github.com/supabase/supabase/tree/master/apps/docs/pages/guides/cli>

See for instance the file `getting-started.mdx` in the `cli` directory:

<https://github.com/supabase/supabase/blob/master/apps/docs/pages/guides/cli/getting-started.mdx>
