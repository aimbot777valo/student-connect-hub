-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  roll_no TEXT,
  college TEXT,
  phone_no TEXT,
  year TEXT,
  interests TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can view all profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Function to check if user has a role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Users can view all roles
CREATE POLICY "Roles are viewable by everyone"
  ON public.user_roles FOR SELECT
  USING (true);

-- Only admins can insert/update/delete roles
CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create questions table
CREATE TABLE public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  votes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Questions are viewable by everyone"
  ON public.questions FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create questions"
  ON public.questions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own questions"
  ON public.questions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own questions"
  ON public.questions FOR DELETE
  USING (auth.uid() = user_id);

-- Create answers table
CREATE TABLE public.answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  votes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Answers are viewable by everyone"
  ON public.answers FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create answers"
  ON public.answers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own answers"
  ON public.answers FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own answers"
  ON public.answers FOR DELETE
  USING (auth.uid() = user_id);

-- Create resources table
CREATE TABLE public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('visual', 'text')),
  url TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  rating DECIMAL DEFAULT 0,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Resources are viewable by everyone"
  ON public.resources FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create resources"
  ON public.resources FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own resources"
  ON public.resources FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own resources"
  ON public.resources FOR DELETE
  USING (auth.uid() = user_id);

-- Create marketplace_items table
CREATE TABLE public.marketplace_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL NOT NULL,
  condition TEXT,
  category TEXT,
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.marketplace_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Marketplace items are viewable by everyone"
  ON public.marketplace_items FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create items"
  ON public.marketplace_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own items"
  ON public.marketplace_items FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own items"
  ON public.marketplace_items FOR DELETE
  USING (auth.uid() = user_id);

-- Create hostels table
CREATE TABLE public.hostels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price TEXT,
  distance TEXT,
  amenities TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  rating DECIMAL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.hostels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hostels are viewable by everyone"
  ON public.hostels FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage hostels"
  ON public.hostels FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create hostel_reviews table
CREATE TABLE public.hostel_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hostel_id UUID REFERENCES public.hostels(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.hostel_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Reviews are viewable by everyone"
  ON public.hostel_reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON public.hostel_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON public.hostel_reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews"
  ON public.hostel_reviews FOR DELETE
  USING (auth.uid() = user_id);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  claimed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Achievements are viewable by everyone"
  ON public.achievements FOR SELECT
  USING (true);

CREATE POLICY "Users can view own achievements"
  ON public.achievements FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own achievements"
  ON public.achievements FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger to update profile updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_questions_updated_at
  BEFORE UPDATE ON public.questions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_answers_updated_at
  BEFORE UPDATE ON public.answers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User'),
    NEW.email
  );
  
  -- Assign default user role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();