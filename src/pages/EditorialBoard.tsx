import { useEffect, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { dataService, EditorialBoardMember, EditorialSection } from '@/services/dataService';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Loader2, MapPin, Mail, Landmark } from 'lucide-react';

import redImg from '@/assets/Dr. B. Anjaneya Reddy.jpg';
import shivaImg from '@/assets/Dr. Shatrughan Shiva.jpg';
import ramzanImg from '@/assets/Muhammad Ramzan.jpg';
import vaniImg from '@/assets/Dr. Vani Sree Kalisetti.jpg';
import venkatImg from '@/assets/Dr. Venkataravana Nayaka G.V..jpg';
import harishMsImg from '@/assets/Dr. Harish M.S.jpg';
import harishBabuImg from '@/assets/Dr. Harish Babu. S.jpg';
import bharthishImg from '@/assets/Mr. Bharthisha S.M, M.Sc. (Agri.).jpg';
import kishoreImg from '@/assets/Mr. Kishore S.M, PGDAEM, MS.c (Agri.).jpg';

const MEMBER_IMAGES: Record<string, string> = {
  "Dr. B. Anjaneya Reddy": redImg,
  "Dr. Shatrughan Shiva": shivaImg,
  "Muhammad Ramzan": ramzanImg,
  "Dr. Vani Sree Kalisetti": vaniImg,
  "Dr. Venkataravana Nayaka G.V.": venkatImg,
  "Dr. Harish M.S": harishMsImg,
  "Dr. Harish Babu. S": harishBabuImg,
  "Mr. Bharthisha S.M, M.Sc. (Agri.)": bharthishImg,
  "Mr. Kishore S.M, PGDAEM, MS.c (Agri.)": kishoreImg,
};

const getMemberImage = (member: EditorialBoardMember) => {
  if (member.image_url && member.image_url.startsWith('http')) {
    return member.image_url;
  }
  const cleanName = member.name.replace(/\s+/g, ' ').trim();
  // Try exact match or partial match
  for (const name of Object.keys(MEMBER_IMAGES)) {
    if (cleanName.includes(name) || name.includes(cleanName)) {
      return MEMBER_IMAGES[name];
    }
  }
  return null;
};

const EditorialBoard = () => {
  const [sections, setSections] = useState<EditorialSection[]>([]);
  const [members, setMembers] = useState<EditorialBoardMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedSections, fetchedMembers] = await Promise.all([
          dataService.getEditorialSections(),
          dataService.getEditorialBoardMembers()
        ]);
        setSections(fetchedSections);
        setMembers(fetchedMembers);
      } catch (e) {
        console.error("Failed to load editorial board");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const getMembersForSection = (section: EditorialSection) => {
    return members.filter(m => {
      if (m.section_id) return m.section_id === section.id;
      // Fallback for old records
      if (!section.title) return false;
      const lowerTitle = section.title.toLowerCase();
      if (lowerTitle.includes("chief") && m.category === "Chief") return true;
      if (lowerTitle.includes("associate") && m.category === "Associate") return true;
      if (lowerTitle.includes("founder") && m.category === "Founder") return true;
      if (lowerTitle.includes("reviewer") && m.category === "Reviewer") return true;
      return false;
    });
  };

  // --- Member Card (Unified for Chief, Associate, Assistant, Founder, Co-Founder) ---
  const MemberCard = ({ member, className = "" }: { member: EditorialBoardMember; className?: string }) => {
    const memberImgSrc = getMemberImage(member);
    return (
      <div className={`flex flex-col sm:flex-row bg-white rounded-lg border border-slate-200/80 shadow-sm overflow-hidden p-5 gap-6 transition-all duration-300 hover:shadow-md ${className}`}>
        {/* Left Image Section */}
        {memberImgSrc ? (
          <div className="w-32 h-40 sm:w-36 sm:h-44 rounded overflow-hidden border border-slate-200 bg-slate-50 shrink-0 mx-auto sm:mx-0 relative shadow-sm">
            <img
              src={memberImgSrc}
              alt={member.name}
              width={144}
              height={176}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="w-32 h-40 sm:w-36 sm:h-44 rounded bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-semibold shrink-0 mx-auto sm:mx-0 border border-slate-200">
            No Image
          </div>
        )}

        {/* Right Content Section */}
        <div className="flex flex-col justify-center gap-1.5 grow min-w-0 text-left">
          <h3 className="text-[#1a365d] text-xl sm:text-[22px] font-bold font-serif tracking-tight leading-snug">{member.name}</h3>
          <p className="text-orange-700 font-bold text-sm sm:text-[15px]">{member.role}</p>

          <div className="space-y-1.5 mt-2">
            {member.affiliation && (
              <div className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-sm leading-relaxed">
                <Landmark className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span>{member.affiliation}</span>
              </div>
            )}

            {member.location && (
              <div className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span>{member.location}</span>
              </div>
            )}

            {member.email && (
              <div className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>
                  <span className="font-semibold text-slate-800">Email:</span>{' '}
                  <a href={`mailto:${member.email}`} className="text-blue-700 hover:underline hover:text-blue-900 transition-colors truncate">
                    {member.email}
                  </a>
                </span>
              </div>
            )}

            {member.profile_link && (
              <div className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-sm">
                <ExternalLink className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>
                  <span className="font-semibold text-slate-800">Institutional Profile:</span>{' '}
                  <a href={member.profile_link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline hover:text-blue-900 transition-colors">
                    View Profile
                  </a>
                </span>
              </div>
            )}
          </div>

          {/* Custom Fields */}
          {member.custom_fields && member.custom_fields.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {member.custom_fields.map((field, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200">
                  {field.label}: {field.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Reviewer / Compact Card (Grid Layout) ---
  const ReviewerCard = ({ member }: { member: EditorialBoardMember }) => (
    <div className="bg-white rounded border border-slate-200 p-5 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <h3 className="font-bold text-[#1a365d] text-base mb-1">{member.name}</h3>
      <p className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">{member.role}</p>

      {member.affiliation && <p className="text-sm text-slate-700 mb-1 leading-snug line-clamp-2" title={member.affiliation}>{member.affiliation}</p>}

      {member.location && (
        <p className="text-xs text-slate-600 mb-2 flex items-center gap-1">
          <MapPin className="w-3 h-3 shrink-0 text-slate-500" /> {member.location}
        </p>
      )}

      {member.email && (
        <a href={`mailto:${member.email}`} className="text-xs text-blue-700 hover:underline block truncate mt-auto pt-2 border-t border-slate-50">
          {member.email}
        </a>
      )}

      {/* Custom Fields Compact */}
      {member.custom_fields?.map((f, i) => (
        <p key={i} className="text-xs text-slate-600 mt-1">
          <span className="font-semibold text-slate-800">{f.label}:</span> {f.value}
        </p>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Editorial Board | Agri Archives</title>
        <meta
          name="description"
          content="Meet the Editorial Board of Agri Archives. Our distinguished team of agricultural experts and reviewers ensures high-quality monthly scientific publications."
        />
        <meta name="keywords" content="editorial board, agricultural editors, agri archives reviewers, scientific committee, agriculture journal editors" />
        <link rel="canonical" href="https://agriarchives.in/editorial-board" />
        <meta property="og:title" content="Editorial Board | Agri Archives" />
        <meta property="og:description" content="Meet the Editorial Board of Agri Archives. Our distinguished team of agricultural experts and reviewers ensures high-quality monthly scientific publications." />
        <meta property="og:url" content="https://agriarchives.in/editorial-board" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
        <div className="bg-slate-50 py-16 min-h-screen">
          <div className="container-magazine max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-4">Editorial Board</h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our distinguished team of experts ensuring the highest standards of scientific publication.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary h-8 w-8" /></div>
            ) : (
              <div className="space-y-16">
                {sections.map(section => {
                  const sectionMembers = getMembersForSection(section);
                  if (sectionMembers.length === 0) return null;

                  const title = section.title.toLowerCase();
                  const isReviewer = title.includes('reviewer');
                  const isAssociate = title.includes('associate') || title.includes('assistant');

                  return (
                    <section key={section.id} className="scroll-mt-20">
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a365d] text-center mb-12 uppercase tracking-widest relative">
                        {section.title}
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-[#e28522]"></span>
                      </h2>

                      {isReviewer ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                          {sectionMembers.map(m => <ReviewerCard key={m.id} member={m} />)}
                        </div>
                      ) : (
                        <div className={isAssociate ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "max-w-4xl mx-auto"}>
                          {sectionMembers.map(m => isAssociate ? <MemberCard key={m.id} member={m} /> : <MemberCard key={m.id} member={m} className="mb-6" />)}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditorialBoard;
