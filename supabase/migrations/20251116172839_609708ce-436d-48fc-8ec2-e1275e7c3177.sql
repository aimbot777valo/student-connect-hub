-- Add foreign key constraints to link user_id columns to profiles
ALTER TABLE marketplace_items
  DROP CONSTRAINT IF EXISTS marketplace_items_user_id_fkey,
  ADD CONSTRAINT marketplace_items_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE questions
  DROP CONSTRAINT IF EXISTS questions_user_id_fkey,
  ADD CONSTRAINT questions_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE answers
  DROP CONSTRAINT IF EXISTS answers_user_id_fkey,
  ADD CONSTRAINT answers_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE hostel_reviews
  DROP CONSTRAINT IF EXISTS hostel_reviews_user_id_fkey,
  ADD CONSTRAINT hostel_reviews_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE achievements
  DROP CONSTRAINT IF EXISTS achievements_user_id_fkey,
  ADD CONSTRAINT achievements_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

ALTER TABLE resources
  DROP CONSTRAINT IF EXISTS resources_user_id_fkey,
  ADD CONSTRAINT resources_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;