-- This file should undo anything in `up.sql`
ALTER TABLE users ADD COLUMN is_verified BOOLEAN DEFAULT FALSE;

