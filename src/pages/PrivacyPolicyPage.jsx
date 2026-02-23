
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ella's Beautique Bolton</title>
        <meta name="description" content="Privacy Policy for Ella's Beautique. Learn how we collect, use, and protect your personal data including booking information and medical history." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-700">
                Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-100 prose prose-pink lg:prose-lg"
            >
              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>1. Introduction</h2>
                  <p>
                    Welcome to Ella's Beautique ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services at 34 Hazelwood Road, Bolton, BL1 6ER.
                  </p>
                  <p>
                    By accessing our services, you consent to the data practices described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>2. Information We Collect</h2>
                  <p>We collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Book an appointment (online or via phone/message).</li>
                    <li>Complete consultation forms or medical questionnaires.</li>
                    <li>Subscribe to our newsletter or marketing communications.</li>
                    <li>Contact us for inquiries.</li>
                  </ul>
                  <p className="mt-4"><strong>Types of Data Collected:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Data:</strong> Name, date of birth.</li>
                    <li><strong>Contact Data:</strong> Email address, telephone number, home address.</li>
                    <li><strong>Health Data:</strong> Medical history, allergies, skin conditions, and medication details (strictly for treatment safety).</li>
                    <li><strong>Transaction Data:</strong> Details about payments and services purchased (we do not store full credit card numbers; payments are processed via secure third-party providers).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>3. How We Use Your Information</h2>
                  <p>We use your personal data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and manage your treatments and appointments.</li>
                    <li>To ensure your safety during treatments (e.g., checking for contraindications).</li>
                    <li>To communicate with you regarding appointments, reminders, and aftercare.</li>
                    <li>To improve our services and customer experience.</li>
                    <li>To comply with legal obligations and insurance requirements.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>4. Data Security & Storage</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information. Your physical records are stored securely in locked cabinets, and digital records are protected by encryption and secure passwords.
                  </p>
                  <p>
                    We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or insurance reporting requirements (typically 7 years for treatment records).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>5. Sharing Your Information</h2>
                  <p>
                    We do not sell or rent your personal information to third parties. We may share your data with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist with booking systems or payment processing.</li>
                    <li><strong>Medical Professionals:</strong> Only in emergencies where your health is at risk.</li>
                    <li><strong>Legal Authorities:</strong> If required by law or to protect our rights.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>6. Cookies</h2>
                  <p>
                    Our website may use "cookies" to enhance your experience. Cookies are small files placed on your hard drive for record-keeping purposes. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Note that some parts of the site may not function properly without them.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>7. Your Rights</h2>
                  <p>Under the GDPR and UK data protection laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate data.</li>
                    <li>Request deletion of your data (subject to legal/insurance retention requirements).</li>
                    <li>Withdraw consent for marketing communications at any time.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>8. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <p className="mt-4">
                    <strong>Ella's Beautique</strong><br />
                    34 Hazelwood Road, Bolton, BL1 6ER<br />
                    Email: <a href="mailto:info@facialsnearmebolton.co.uk" className="text-pink-600 hover:underline">info@facialsnearmebolton.co.uk</a><br />
                    Phone: 07912611390
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
