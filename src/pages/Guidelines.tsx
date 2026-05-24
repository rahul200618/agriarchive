import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, CreditCard, Shield, Mail, AlertTriangle, Calendar, FileCheck, Banknote, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Guidelines = () => {
  return (
    <>
      <Helmet>
        <title>Author Guidelines | Agri Archives</title>
        <meta
          name="description"
          content="Submission process, formatting guidelines, checklist, and payment details for authors submitting to Agri Archives."
        />
        <link rel="canonical" href="https://agriarchives.in/guidelines" />
      </Helmet>
      <Layout>
        {/* Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-magazine">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-white mb-4 font-serif text-4xl md:text-5xl font-bold">Author Guidelines</h1>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
                A comprehensive guide to preparing, submitting, and publishing your articles with Agri Archives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-spacing bg-white">
          <div className="container-magazine">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar Navigation */}
              <aside className="lg:col-span-1">
                <nav className="sticky top-24 space-y-2">
                  <p className="font-display font-bold text-slate-800 mb-4 px-4 uppercase tracking-wider text-sm">Quick Navigation</p>
                  {[
                    { id: 'submission', label: 'Submission Process', icon: FileText },
                    { id: 'checklist', label: 'Checklist & Format', icon: FileCheck },
                    { id: 'payment', label: 'Publication & Payment', icon: CreditCard },
                    { id: 'legal', label: 'Legal & Policy', icon: Shield },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors font-medium border border-transparent hover:border-blue-100"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3 space-y-16">

                {/* Submission Process */}
                <section id="submission" className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-sm">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-[#1a365d] text-3xl font-bold">Submission Process</h2>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 md:p-8 space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                        <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                          <Mail className="w-5 h-5" /> How to Submit
                        </h3>
                        <p className="text-blue-800">
                          Articles must be submitted exclusively via email to: <br />
                          <a href="mailto:editor@agriarchives.in" className="font-bold underline text-blue-700 hover:text-blue-900">editor@agriarchives.in</a>
                        </p>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg flex items-start gap-4">
                        <Calendar className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-red-900 mb-1">Submission Deadline</h3>
                          <p className="text-red-800">
                            Last date for submission of articles is the <strong>20th of every month</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 pt-4">
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
                          <Shield className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                          <h4 className="font-bold text-slate-700">Plagiarism</h4>
                          <p className="text-sm text-slate-600">Must be <strong>&lt; 20%</strong>. Exceeding this limit leads to rejection.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
                          <FileText className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                          <h4 className="font-bold text-slate-700">File Size</h4>
                          <p className="text-sm text-slate-600">Must be less than <strong>4 MB</strong>.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
                          <FileCheck className="w-8 h-8 mx-auto text-green-500 mb-2" />
                          <h4 className="font-bold text-slate-700">Length</h4>
                          <p className="text-sm text-slate-600">Do not exceed <strong>5 pages</strong>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Checklist & Formatting */}
                <section id="checklist" className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-[#1a365d] text-3xl font-bold">Checklist & Formatting</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Checklist */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
                      <h3 className="font-bold text-xl text-slate-800 mb-4 border-b pb-2">Submission Checklist</h3>
                      <ul className="space-y-3">
                        {[
                          "Title",
                          "Authors names and affiliations",
                          "Email id of corresponding author",
                          "Abstract (Not more than 100 words)",
                          "Keywords (5-7)",
                          "Introduction",
                          "Body of format/ Methodology",
                          "Conclusion",
                          "References (APA format)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-slate-500 bg-slate-50 p-3 rounded">
                        <strong>Note:</strong> Include tables and figures as needed to support your article’s content.
                      </p>
                    </div>

                    {/* Formatting */}
                    <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="font-bold text-xl text-white mb-6 border-b border-slate-700 pb-2">Formatting Rules</h3>
                      <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">Aa</span>
                          <div>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Font</p>
                            <p className="font-bold text-lg">Times New Roman</p>
                          </div>
                        </li>
                        <li className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">12</span>
                          <div>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Font Size</p>
                            <p className="font-bold text-lg">12 pt</p>
                          </div>
                        </li>
                        <li className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">¶</span>
                          <div>
                            <p className="text-sm text-slate-400 uppercase tracking-wider">Line Spacing</p>
                            <p className="font-bold text-lg">1.15</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Payment */}
                <section id="payment" className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-sm">
                      <Banknote className="w-6 h-6" />
                    </div>
                    <h2 className="text-[#1a365d] text-3xl font-bold">Publication & Payment</h2>
                  </div>

                  <div className="bg-white rounded-xl border border-purple-100 shadow-md overflow-hidden">
                    <div className="bg-purple-50 p-6 border-b border-purple-100">
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">Article Processing Charge (APC)</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-purple-700">₹ 150/-</span>
                      </div>
                      <p className="text-purple-600 text-sm mt-1">₹ 50/- extra for author list crossing 3.</p>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                      {/* Process Steps */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-green-600" /> Acceptance
                          </h4>
                          <p className="text-sm text-slate-600">
                            We notify the corresponding author of acceptance via email within <strong>24 hours</strong> of manuscript submission.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-orange-600" /> Deadline
                          </h4>
                          <p className="text-sm text-slate-600">
                            Payment must be made within <strong>two days</strong> of receiving the acceptance notification.
                          </p>
                        </div>
                      </div>

                      {/* Bank Details */}
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                        <h4 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">Payment Details</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">UPI / Mobile</p>
                            <p className="font-mono text-lg font-bold text-slate-700">9148942104</p>
                            <p className="text-sm text-slate-600">PhonePe, Google Pay (Kishore S.M)</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Bank Transfer</p>
                            <p className="text-sm font-bold text-slate-700">State Bank of India</p>
                            <p className="text-sm text-slate-600">Account: <span className="font-mono font-bold">38796739678</span></p>
                            <p className="text-sm text-slate-600">Holder: Kishore S.M</p>
                          </div>
                        </div>
                      </div>

                      {/* Confirmation Steps */}
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3">After Payment</h4>
                        <ul className="space-y-3">
                          <li className="flex gap-3 text-sm text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                            <span>Send screenshot of payment receipt to <a href="mailto:editor@agriarchives.in" className="text-blue-600 underline">editor@agriarchives.in</a>.</span>
                          </li>
                          <li className="flex gap-3 text-sm text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                            <span>We verify and proceed to publication.</span>
                          </li>
                          <li className="flex gap-3 text-sm text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                            <span>You receive your <strong>Publication Certificate</strong> within 3 days of publication.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal & Policies */}
                <section id="legal" className="scroll-mt-28">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shadow-sm">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h2 className="text-[#1a365d] text-3xl font-bold">Legal & Policies</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                      
                      <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-3 border-b pb-2">Author's Responsibility</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                          <li>While our editorial team reviews articles for quality and to ensure they meet our guidelines, the content itself is not changed.</li>
                          <li>Authors are solely responsible for the accuracy, originality and authenticity of their content.</li>
                          <li>If any plagiarism or other issues are found in an article-whether submitted or already published-the author is fully responsible.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-3 border-b pb-2">Our Rights</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                          <li>We reserve the right to refuse service to anyone, for any reason, at any time.</li>
                          <li>Submitted content, such as articles, may be sent unencrypted over various networks. It may also be adjusted to meet the technical requirements of connecting networks or devices.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-3 border-b pb-2">Privacy Policy</h3>
                        <p className="text-sm text-slate-600 mb-2">Your personal information is handled according to our Privacy Policy, which outlines:</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                          <li><strong>Information We Collect:</strong> We collect personal details like your name, address and email to process your articles.</li>
                          <li><strong>Information Disclosure:</strong> We may share your personal information if legally required or if you violate our terms of service.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-3 border-b pb-2">Prohibited Uses</h3>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
                          <div>
                            <p className="font-bold text-slate-700">Unlawful Activities:</p>
                            <p className="mb-3">You may not use our services for any illegal purposes.</p>
                            
                            <p className="font-bold text-slate-700">Intellectual Property Violations:</p>
                            <p className="mb-3">Do not violate our intellectual property rights or those of others.</p>
                            
                            <p className="font-bold text-slate-700">Harmful Content:</p>
                            <p>You are forbidden from submitting any content that is harmful, fraudulent, or misleading.</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-700">Malicious Software:</p>
                            <p className="mb-3">Do not upload or transmit viruses, worms, or any other type of malicious software.</p>
                            
                            <p className="font-bold text-slate-700">Spam and Phishing:</p>
                            <p>Engaging in spamming, phishing, or similar deceptive activities is not allowed.</p>
                          </div>
                        </div>
                        <p className="mt-4 text-xs font-semibold text-red-600 bg-red-50 p-2.5 rounded border border-red-100">
                          ⚠️ Violation of these terms may result in termination of services.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 mb-3">Disclaimer of Warranties and Limitation of Liability</h3>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
                            <li>Services are provided &ldquo;as is&rdquo; without guarantees or warranties.</li>
                            <li>Agri Archives is not liable for direct, indirect, or consequential damages arising from the use of our services.</li>
                          </ol>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 mb-3">Cancellation & Refund Policy</h3>
                          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
                            <li>To withdraw an article before publication, contact us at <a href="mailto:editor@agriarchives.in" className="text-blue-600 underline">editor@agriarchives.in</a>. Once published, articles cannot be deleted or cancelled.</li>
                            <li>Refunds for erroneous payments must be requested within three days via email.</li>
                          </ol>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

              </article>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Guidelines;
