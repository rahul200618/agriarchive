-- ==========================================
-- AGRIARCHIVES NEW DATABASE SETUP & DATA
-- Run this script in your Supabase SQL Editor
-- ==========================================

DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS issues CASCADE;
DROP TABLE IF EXISTS editorial_board_members CASCADE;
DROP TABLE IF EXISTS editorial_sections CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- 1. ISSUES TABLE
CREATE TABLE issues (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    month TEXT NOT NULL,
    year INTEGER NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Current', 'Archived', 'Draft')),
    cover_url TEXT,
    pdf_url TEXT,
    publish_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ARTICLES TABLE
CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    issue_id UUID REFERENCES issues(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    authors TEXT,
    affiliation TEXT,
    pdf_url TEXT,
    abstract TEXT,
    keywords TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. EDITORIAL SECTIONS TABLE
CREATE TABLE editorial_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. EDITORIAL BOARD MEMBERS TABLE
CREATE TABLE editorial_board_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id UUID REFERENCES editorial_sections(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    affiliation TEXT,
    location TEXT,
    email TEXT,
    profile_link TEXT,
    image_url TEXT,
    category TEXT DEFAULT 'General',
    custom_fields JSONB DEFAULT '[]'::jsonb,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. PRODUCTS (SHOP) TABLE
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    category TEXT,
    price NUMERIC DEFAULT 0,
    features TEXT[],
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ==========================================
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE editorial_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE editorial_board_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- CREATE PUBLIC READ POLICIES
-- ==========================================
CREATE POLICY "Allow public read access for issues" ON issues FOR SELECT USING (true);
CREATE POLICY "Allow public read access for articles" ON articles FOR SELECT USING (true);
CREATE POLICY "Allow public read access for editorial_sections" ON editorial_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access for editorial_board_members" ON editorial_board_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access for products" ON products FOR SELECT USING (true);

-- ==========================================
-- CREATE ADMIN WRITE POLICIES
-- ==========================================
CREATE POLICY "Allow admin write access for issues" ON issues FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin write access for articles" ON articles FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin write access for editorial_sections" ON editorial_sections FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin write access for editorial_board_members" ON editorial_board_members FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow admin write access for products" ON products FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==========================================
-- POPULATING NEW EDITORIAL SECTIONS
-- ==========================================
INSERT INTO editorial_sections (id, title, display_order) VALUES ('11111111-1111-1111-1111-111111111111', 'Editor-in-Chief', 1);
INSERT INTO editorial_sections (id, title, display_order) VALUES ('22222222-2222-2222-2222-222222222222', 'Associate Editors', 2);
INSERT INTO editorial_sections (id, title, display_order) VALUES ('33333333-3333-3333-3333-333333333333', 'Assistant Editors', 3);
INSERT INTO editorial_sections (id, title, display_order) VALUES ('44444444-4444-4444-4444-444444444444', 'Founder Editor', 4);
INSERT INTO editorial_sections (id, title, display_order) VALUES ('44444444-4444-4444-4444-444444444445', 'Co-Founder Editor', 5);
INSERT INTO editorial_sections (id, title, display_order) VALUES ('55555555-5555-5555-5555-555555555555', 'Reviewers', 6);

-- ==========================================
-- POPULATING NEW EDITORIAL BOARD MEMBERS
-- ==========================================

-- Associate Editors
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a2000000-0000-0000-0000-000000000001', '22222222-2222-2222-2222-222222222222', 'Dr. Shatrughan Shiva', 'Postdoctoral Scholar', 'College of Agriculture and Natural Resources (CANR), Michigan State University, East Lansing, MI, USA', NULL, 'shivash1@msu.edu', 'https://www.canr.msu.edu/people/shatrughan-shiva-1', NULL, 'Associate', '[]', 1),
('a2000000-0000-0000-0000-000000000002', '22222222-2222-2222-2222-222222222222', 'Muhammad Ramzan', 'Researcher', 'Guangdong Key Laboratory of Animal Conservation and Resource Utilization, Guangdong Public Laboratory of Wild Animal Conservation and Utilization, Institute of Zoology, Guangdong Academy of Sciences, Guangzhou, 510260, China.', NULL, 'ramzan.mnsua@gmail.com', 'https://www.researchgate.net/profile/Muhammad-Ramzan-36', NULL, 'Associate', '[]', 2),
('a2000000-0000-0000-0000-000000000003', '22222222-2222-2222-2222-222222222222', 'Dr. Vani Sree Kalisetti', 'Senior Scientist (Entomology)', 'PJTAU', NULL, 'vani.ento@pjtau.edu.in', 'https://pjtau.irins.org/profile/389335', NULL, 'Associate', '[]', 3);

-- Reviewers
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a5000000-0000-0000-0000-000000000001', '55555555-5555-5555-5555-555555555555', 'Kishore S.M', 'Reviewer (Ph.D. Scholar - Entomology)', 'KSNUAHS, Shivamogga-577204', NULL, 'kp464751@gmail.com', NULL, NULL, 'Reviewer', '[]', 1),
('a5000000-0000-0000-0000-000000000002', '55555555-5555-5555-5555-555555555555', 'Manasa S R', 'Reviewer (Ph.D. - Agronomy)', 'UAS, Dharwad - 580005', NULL, 'manasasr2042@gmail.com', NULL, NULL, 'Reviewer', '[]', 2),
('a5000000-0000-0000-0000-000000000003', '55555555-5555-5555-5555-555555555555', 'THV Meghana', 'Reviewer (Ph.D. Scholar - Agronomy)', 'UAS, Dharwad - 580005', NULL, 'thvmeghana2030@gmail.com', NULL, NULL, 'Reviewer', '[]', 3);

-- Founder Editor
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a4000000-0000-0000-0000-000000000001', '44444444-4444-4444-4444-444444444444', 'Mr. Bharthisha S.M, M.Sc. (Agri.)', 'Founder Editor (Ph.D. Scholar - Agronomy)', 'UAS, Dharwad – 580005', NULL, 'bharthishsm1@gmail.com', NULL, NULL, 'Founder', '[]', 1);

-- Editor-in-Chief
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a1000000-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 'Dr. B. Anjaneya Reddy', 'Professor and Head (Plant Pathology)', 'Horticulture Research and Extension Centre, Hogalagere, Srinivasapura (T), Kolar (D), Karnataka, India.', NULL, 'arb_agri@yahoo.co.in', NULL, NULL, 'Chief', '[]', 1);

-- Assistant Editors
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a3000000-0000-0000-0000-000000000001', '33333333-3333-3333-3333-333333333333', 'Dr. Venkataravana Nayaka G.V.', 'Assistant professor (Agronomy)', 'College of Sericulture, UAS(B) Chintamani -564125, Karnataka', NULL, 'venkat05iirr@gmail.com', 'https://www.uasbangalore.edu.in/en/departments-college-agriculture-chinthamani/', NULL, 'Assistant', '[]', 1),
('a3000000-0000-0000-0000-000000000002', '33333333-3333-3333-3333-333333333333', 'Dr. Harish M.S', 'Assistant Professor (SST)', 'Chaudhary Charan Singh Haryana Agricultural University, College of Agriculture, Bawal- 123501', NULL, 'harishseedtech@hau.ac.in', 'https://www.hau.ac.in/department/Nw==/MTI0', NULL, 'Assistant', '[]', 2),
('a3000000-0000-0000-0000-000000000003', '33333333-3333-3333-3333-333333333333', 'Dr. Harish Babu. S', 'Assistant Professor (Sericulture)', 'Dept. of Agricultural Entomology, University of Agricultural Sciences, Raichur, Lingasugur road, Raichur- 584104, Karnataka- India', NULL, 'seriharishbabu@gmail.com', 'https://coar.in/agricultural-entomology', NULL, 'Assistant', '[]', 3);

-- Co-Founder Editor
INSERT INTO editorial_board_members (id, section_id, name, role, affiliation, location, email, profile_link, image_url, category, custom_fields, display_order) VALUES
('a4000000-0000-0000-0000-000000000002', '44444444-4444-4444-4444-444444444445', 'Mr. Kishore S.M, PGDAEM, MS.c (Agri.)', 'Ph. D Scholar, (Entomology)', 'KSNUAHS, Shivamogga', NULL, 'kishoresm@uahs.edu.in', NULL, NULL, 'Founder', '[]', 1);

-- ==========================================
-- POPULATING PRODUCTS (SHOP)
-- ==========================================
INSERT INTO products (id, title, description, category, price, features, display_order) VALUES
('f0000000-0000-0000-0000-000000000001', 'Insect Resin Key Chains', 'Realistic and artistic insect resin key chains', 'Key Chain', 0, ARRAY['Ideal for gifts, collections and souvenirs', 'Durable, lightweight and visually appealing'], 1),
('f0000000-0000-0000-0000-000000000002', 'Insect Printed T-Shirts', 'High-quality T-shirts with insect designs and prints', 'T-Shirt', 0, ARRAY['Suitable for students, researchers and nature enthusiasts', 'Available in multiple designs and sizes'], 2),
('f0000000-0000-0000-0000-000000000003', 'Insect 3D Images & Models', 'Educational 3D insect images and models', '3D Model', 0, ARRAY['Useful for teaching, learning, exhibitions, and displays', 'Scientifically accurate and visually engaging'], 3),
('f0000000-0000-0000-0000-000000000004', 'Insect Drawings & Illustrations', 'Hand-drawn and digital insect illustrations', 'Illustration', 0, ARRAY['Suitable for posters, presentations, books and decor', 'Custom orders available on request'], 4),
('f0000000-0000-0000-0000-000000000005', 'Insect Alphabet Charts', 'Alphabet charts featuring insects (A-Z)', 'Chart', 0, ARRAY['Best for schools, colleges, and early science education', 'Colorful, informative and child-friendly designs'], 5);

-- ==========================================
-- ENABLE SUPABASE REALTIME REPLICATION
-- ==========================================
alter publication supabase_realtime add table editorial_board_members;
alter publication supabase_realtime add table editorial_sections;
alter publication supabase_realtime add table products;