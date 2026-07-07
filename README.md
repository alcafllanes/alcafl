# alcafl portfolio

My portfolio site, built with Next.js and deployed on Vercel, with Supabase handling the contact form.

## Stack

- Next.js 14 (App Router)
- Plain CSS, no framework, all in `app/globals.css`
- Supabase for storing contact form submissions
- Deployed on Vercel

## Running it locally

```bash
npm install
cp .env.local.example .env.local
```

Fill in `.env.local` with your own Supabase project values (see below), then:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Setting up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL editor and run this to create the table the contact form writes to:

```sql
create table messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  type text,
  message text not null,
  created_at timestamp with time zone default now()
);

alter table messages enable row level security;

create policy "Allow public insert"
on messages for insert
to anon
with check (true);
```

This lets the public form insert new rows but does not let anyone read existing messages back through the public API, you will read them from the Supabase dashboard directly.

3. Go to Project Settings > API and copy the Project URL and the anon public key.
4. Put those into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Deploying

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. In the Vercel project settings, add the same two environment variables from `.env.local`.
4. Deploy. Vercel picks up the Next.js project automatically, no extra config needed.

Any time you push to the main branch, Vercel redeploys.

## Editing content

Everything text based lives in `lib/data.js`, experience, work items, partners, personal projects, services, FAQs, social links. Update that file and the pages update automatically, no need to touch the components.

To add a real personal project with a hover preview video:

1. Drop the video file into `public/`, for example `public/my-project.mp4`.
2. In `lib/data.js`, add an entry to `personalProjects` with `type: 'video'` and `media: '/my-project.mp4'`.
3. It will autoplay muted on hover in the grid, and show with controls when clicked open.

To swap the profile photo or mascot images, replace the files in `public/` with the same filenames, or update the `src` paths in `app/about/page.js` and `app/page.js`.

## Project structure

```
app/
  layout.js          root layout, fonts, header and footer
  globals.css         all styling
  page.js             home page
  about/page.js
  services/page.js
  work/page.js
  work/[id]/page.js   project detail, dynamic route
  partners/page.js
  contact/page.js
components/
  Header.js
  Footer.js
  Reveal.js           scroll reveal wrapper
  Faq.js              accordion used on services and contact
  ProjectCard.js       single personal project card, hover to play video
  ProjectsSection.js   grid plus modal for personal projects
  ContactForm.js       form wired to Supabase
  WorkList.js          filterable list on the work page
lib/
  data.js             all site content lives here
  supabaseClient.js
```
