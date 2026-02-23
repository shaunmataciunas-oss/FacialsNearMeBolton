
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function TermsConditionsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Ella's Beautique Bolton</title>
        <meta name="description" content="Terms and Conditions for Ella's Beautique. Information on booking policies, cancellations, deposits, and treatment safety protocols." />
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
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-700">
                Please read these terms carefully before booking your appointment.
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
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>1. Appointments & Booking</h2>
                  <p>
                    All treatments at Ella's Beautique are by appointment only. You can book via our website, telephone, or social media channels. We recommend booking in advance to secure your preferred date and time.
                  </p>
                  <p>
                    We reserve the right to refuse service to anyone for any reason at any time, particularly if there are medical contraindications that make treatment unsafe.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>2. Deposits & Payments</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A non-refundable booking fee/deposit may be required to secure your appointment. This amount will be deducted from the final treatment cost.</li>
                    <li>The remaining balance is due at the end of your appointment.</li>
                    <li>We accept cash and major credit/debit cards.</li>
                    <li>Prices are subject to change without prior notice, but the price at the time of booking will be honored.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>3. Cancellations & No-Shows</h2>
                  <p>
                    We understand that circumstances may change. However, to respect our time and other clients:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We require at least <strong>48 hours' notice</strong> for cancellations or rescheduling.</li>
                    <li>Cancellations made within 48 hours of the appointment time may result in the forfeiture of your deposit.</li>
                    <li>"No-shows" (failing to attend without notice) will be charged the full cost of the missed appointment or forfeit their deposit, and may be required to prepay for future bookings.</li>
                    <li>If you are more than 15 minutes late, we may need to shorten or reschedule your treatment to avoid delaying the next client.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>4. Health & Safety</h2>
                  <p>
                    Your health is our priority. You must disclose all medical conditions, allergies, and medications on your consultation form.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Patch Tests:</strong> Certain treatments (e.g., tinting, lash lifts, chemical peels) require a mandatory patch test at least 48 hours before your appointment. Failure to attend a patch test will result in the cancellation of your treatment.</li>
                    <li><strong>Medical Changes:</strong> Please inform us immediately of any changes to your health or medication between appointments.</li>
                    <li>We adhere to strict hygiene and sanitation protocols. Please do not attend your appointment if you are unwell or have a contagious condition (e.g., cold sores, flu, eye infections).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>5. Liability</h2>
                  <p>
                    Ella's Beautique will not be liable for any damage, loss, or injury resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Failure to disclose medical conditions or medications.</li>
                    <li>Failure to follow pre-treatment or aftercare instructions provided by your therapist.</li>
                    <li>Loss or damage to personal property while on the premises.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>6. Children & Guests</h2>
                  <p>
                    Due to the nature of our treatments and insurance regulations, children are not permitted in the treatment room unless they are receiving a treatment themselves (with parental consent). We ask that you attend your appointment alone to ensure a relaxing environment for yourself and others.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>7. Complaints</h2>
                  <p>
                    In the unlikely event that you are unhappy with your service, please contact us within 24 hours of your appointment so we can discuss your concerns and find a suitable resolution. We are dedicated to ensuring your satisfaction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>8. Contact Information</h2>
                  <p>
                    <strong>Ella's Beautique</strong><br />
                    34 Hazelwood Road, Bolton, BL1 6ER<br />
                    Phone: 07912611390<br />
                    Email: info@facialsnearmebolton.co.uk
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

export default TermsConditionsPage;
