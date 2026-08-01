-- YConnect Supabase schema
-- Run this in the Supabase SQL Editor (Project > SQL Editor > New Query)

-- 1. Student applications
create table if not exists student_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  university text not null,
  degree text not null,
  skills text[] not null default '{}',
  availability text not null,
  experience text not null,
  portfolio text,
  resume_path text not null,
  status text not null default 'pending' check (status in ('pending', 'reviewed', 'shortlisted', 'rejected', 'matched')),
  notes text,
  created_at timestamptz not null default now()
);

-- 2. Startup applications
create table if not exists startup_applications (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  country text not null,
  contact_person text not null,
  email text not null,
  role_needed text[] default '{}',
  skills_needed text[] default '{}',
  duration text,
  budget text,
  description text not null,
  status text not null default 'pending' check (status in ('pending', 'reviewed', 'shortlisted', 'rejected', 'matched')),
  notes text,
  created_at timestamptz not null default now()
);

-- 3. Contact messages
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  inquiry_type text not null,
  subject text not null,
  message text not null,
  status text not null default 'pending' check (status in ('pending', 'reviewed', 'resolved')),
  notes text,
  created_at timestamptz not null default now()
);

-- 4. Admin whitelist (who may access /admin, independent of email domain)
create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

-- Seed yourself as the first admin (EDIT the email below before running):
-- insert into admin_users (email, role) values ('dauren.oberhuber@yconnect.info', 'admin');

-- Enable Row Level Security on all tables. No policies are added for the
-- anon/public role, since ALL reads and writes to these tables happen via
-- the service-role key in server-side API routes / the admin dashboard,
-- which bypasses RLS entirely. This means the anon key can never read or
-- write application data directly from the browser.
alter table student_applications enable row level security;
alter table startup_applications enable row level security;
alter table contact_messages enable row level security;
alter table admin_users enable row level security;

-- 5. Storage bucket for resumes (private — no public read access)
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

-- No storage policies are added for anon/authenticated roles; resumes are
-- uploaded and downloaded (via short-lived signed URLs) exclusively through
-- the service-role key on the server.

-- 6. Migration: duration/budget became optional fields on the startup form.
-- Safe to re-run on a table created before this change — a no-op if the
-- columns are already nullable.
alter table startup_applications alter column duration drop not null;
alter table startup_applications alter column budget drop not null;
