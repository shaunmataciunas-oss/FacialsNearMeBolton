
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, User, Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 7,
      title: 'How Peptides Like BPC-157 and Blue Copper Peptides Revolutionize Skin Regeneration',
      author: 'Ella Baines',
      date: 'February 21, 2026',
      readTime: '4 min read',
      category: 'Advanced Skincare',
      image: 'https://images.unsplash.com/photo-1617897903246-719242758050',
      imageAlt: 'Scientific skincare and peptides',
      excerpt: 'Discover how advanced peptides like BPC-157 and Blue Copper Peptides work at the cellular level to stimulate collagen, accelerate healing, and support skin regeneration.',
      path: '/blog/peptides-skin-regeneration'
    },
    {
      id: 1,
      title: '10 Benefits of Regular Facials for Healthy, Glowing Skin',
      author: 'Ella Baines',
      date: 'January 22, 2026',
      readTime: '2 min read',
      category: 'Skincare Advice',
      image: 'https://images.unsplash.com/photo-1618871588239-18017db1dc15',
      imageAlt: 'woman from Bolton with beautiful glowing skin',
      excerpt: 'Facials are more than just an indulgence; they are essential for long-term skin health. Discover the top 10 reasons why booking a regular facial can transform your complexion.',
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            While many people view facials as a luxury treat reserved for special occasions, incorporating them into your regular skincare routine can work wonders for your complexion. At Ella's Beautique, we believe that healthy skin is a journey, not just a destination. Here are the top 10 benefits of getting regular facials.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">1. Deep Cleansing</h3>
              <p>A professional facial provides a deeper cleanse than you can achieve at home. We use salon-grade products to remove toxin buildup, dirt, and excess oil from your pores, preventing breakouts and dullness.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">2. Anti-Aging Effects</h3>
              <p>Regular facials stimulate cell regeneration and collagen production. Treatments like microneedling or chemical peels can significantly reduce the appearance of fine lines and wrinkles, keeping your skin looking youthful.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">3. Stress Reduction</h3>
              <p>Facial massage activates your sympathetic nervous system, reducing anxiety and elevating your mood. It’s not just about looking good; it’s about feeling good too.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">4. Improved Circulation</h3>
              <p>The massage techniques used during a facial improve blood circulation under the skin. This brings oxygen and nutrients to skin cells, encouraging a healthy, natural glow.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">5. Skin Rejuvenation</h3>
              <p>Exfoliation removes dead skin cells that make your skin look rough and dry. Revealing the fresh skin underneath improves texture and tone instantly.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">6. Detoxification</h3>
              <p>Your skin needs to rid itself of waste. Therapists use manual lymphatic drainage to flush out toxins, reducing fluid retention and puffiness.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">7. Treating Acne and Blemishes</h3>
              <p>Professional extractions clear out clogged pores without damaging the skin (unlike picking at home!). Regular treatments can keep acne at bay and reduce scarring.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">8. Expert Analysis</h3>
              <p>An aesthetician analyzes your skin up close and can diagnose common issues you might miss. We can recommend the perfect daily routine for your specific skin type.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">9. Increased Absorption</h3>
              <p>By clearing your pores and smoothing your skin’s surface, facials allow your expensive home skincare products to absorb deeper and work more effectively.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">10. Instant Glow</h3>
              <p>There is nothing quite like the immediate radiance you get after a facial. It’s the perfect preparation for a big event or just a confidence boost for your week ahead.</p>
            </div>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Ready to Book Your Glow?</h4>
            <p className="mb-6 text-pink-800 text-lg">Contact us today to schedule your consultation or treatment.</p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Dermaplaning vs. Microdermabrasion: Which Exfoliation Treatment Is Right for You?',
      author: 'Ella Baines',
      date: 'January 22, 2026',
      readTime: '1 min read',
      category: 'Treatment Comparison',
      image: 'https://images.unsplash.com/photo-1664958884838-705b1518406f',
      imageAlt: 'Professional skin exfoliation treatment being performed',
      excerpt: 'Confused about exfoliation options? We break down the key differences between Dermaplaning and Microdermabrasion to help you choose the perfect treatment for your skin goals.',
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Exfoliation is a key step in any skincare routine, helping to remove dead skin cells and reveal a brighter, smoother complexion. Two popular professional exfoliation treatments are Dermaplaning and Microdermabrasion. But which one is right for you? Let's break down the differences.
          </p>
          
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">What is Microdermabrasion?</h3>
            <p>
              Microdermabrasion is a mechanical exfoliation technique that uses a special applicator with an abrasive surface to gently sand away the thick outer layer of the skin. It works to rejuvenate the skin, treating light scarring, discoloration, and sun damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-800 mb-3">Pros</h4>
              <ul className="list-disc pl-5 space-y-2 text-green-900">
                <li>Effective for deeper exfoliation</li>
                <li>Stimulates collagen production</li>
                <li>Great for unclogging pores</li>
                <li>Helps fade acne scars and pigmentation</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-bold text-green-800 mb-3">Cons</h4>
              <ul className="list-disc pl-5 space-y-2 text-red-900">
                <li>Can be slightly abrasive for sensitive skin</li>
                <li>Mild redness immediately after treatment</li>
                <li>Not suitable for active acne</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Best For:</h3>
            <p>
              Those with dull skin, mild acne scars, age spots, or texture issues who want a deeper resurfacing treatment.
            </p>
          </div>

          <div className="my-8 border-t border-b border-gray-200 py-8">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dermaplaning vs. Microdermabrasion</h3>
            <p className="mb-4">
              While both treatments exfoliate the skin, <strong>Dermaplaning</strong> uses a surgical scalpel to gently scrape off dead skin cells and "peach fuzz" (vellus hair), leaving the skin incredibly smooth and allowing for flawless makeup application.
            </p>
            <p>
              <strong>Microdermabrasion</strong>, on the other hand, uses suction and abrasion to clear out pores and stimulate blood flow, making it better for skin texture and congestion.
            </p>
            <p className="font-semibold mt-4 text-pink-700">
              Key Difference: Dermaplaning removes hair; Microdermabrasion does not.
            </p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Still Unsure? Let Us Help!</h4>
            <p className="mb-6 text-pink-800 text-lg">
              At Ella's Beautique, we can assess your skin and recommend the perfect exfoliation treatment for your unique needs.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Why Choose Professional Acne Facials in Bolton?',
      author: 'Ella Baines',
      date: 'January 22, 2026',
      readTime: '2 min read',
      category: 'Acne Treatment',
      image: 'https://images.unsplash.com/photo-1671789407757-89c2b29f5d7e',
      imageAlt: 'acne treatment on a lady in Bolton',
      excerpt: 'Struggling with persistent breakouts? Learn why professional acne facials at Ella\'s Beautique provide the deep cleaning and expert care needed for clear, healthy skin.',
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Acne is one of the most common yet frustrating skin concerns. While over-the-counter products promise miracles, they often fail to address the root causes of breakouts. That’s where professional acne facials come in. At Ella's Beautique in Bolton, we specialize in targeted treatments designed to clear congestion, calm inflammation, and restore confidence.
          </p>
          
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Why Professional Acne Facials Work</h3>
            <p className="mb-4">
              Unlike a simple face wash at home, a professional acne facial attacks breakouts from multiple angles:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Deep Extraction:</strong> We safely remove blackheads and whiteheads without damaging the surrounding skin, preventing the scarring that often comes from "picking" at home.</li>
              <li><strong>Clinical Grade Exfoliation:</strong> Using salicylic or glycolic acid peels, we dissolve the glue holding dead skin cells together, unclogging pores at a deeper level.</li>
              <li><strong>Bacteria Control:</strong> High-frequency treatments or blue LED light therapy kill acne-causing bacteria deep within the pore.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Real Results: Before and After Acne Facials</h3>
            <p>
              Consistency is key when treating acne. Most clients notice an immediate reduction in redness and inflammation after just one session. Over a course of treatments, you can expect:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Significantly fewer active breakouts</li>
              <li>Smoother skin texture</li>
              <li>Fading of post-inflammatory hyperpigmentation (acne marks)</li>
              <li>Balanced oil production</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Why Ella's Beautique Is Bolton's Choice for Acne Facials</h3>
            <p>
              We don't believe in a "one size fits all" approach. Acne can be hormonal, bacterial, or lifestyle-related. During your consultation, we analyze your specific triggers and customize a treatment plan that might include chemical peels, microneedling, or soothing enzyme masks. Our goal isn't just to treat the spot you have today, but to prevent the one you might get tomorrow.
            </p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Ready to Transform Your Skin?</h4>
            <p className="mb-6 text-pink-800 text-lg">
              Don't let acne hold you back. Book your professional assessment today.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'The Science Behind Million Dollar Facials: What to Expect and Who Should Try It',
      author: 'Ella Baines',
      date: 'January 22, 2026',
      readTime: '2 min read',
      category: 'Luxury Treatments',
      image: 'https://images.unsplash.com/photo-1618871588239-18017db1dc15',
      imageAlt: 'Woman with radiant skin',
      excerpt: 'Discover the advanced multi-step treatment that combines dermaplaning, microneedling, and lymphatic drainage for a complete skin rejuvenation experience.',
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            The Million Dollar Facial is a luxurious, multi-step treatment designed to deeply exfoliate, flush out toxins, and stimulate collagen production. It's not just a facial; it's a complete skin rejuvenation experience that leaves your skin looking brighter, firmer, and infinitely more radiant.
          </p>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">What is a Million Dollar Facial?</h3>
            <p>
              This advanced treatment combines dermaplaning, microneedling, and lymphatic drainage massage to deliver visible results instantly. It targets multiple skin concerns simultaneously, making it a favorite for those seeking a "red carpet" glow.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">The Science & Steps Behind the Treatment</h3>
            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li><strong>Double Cleanse:</strong> Removes surface impurities and makeup.</li>
              <li><strong>Dermaplaning:</strong> Removes dead skin cells and vellus hair (peach fuzz) for a smooth base.</li>
              <li><strong>Lymphatic Drainage Massage:</strong> Reduces puffiness and helps remove toxins from the skin.</li>
              <li><strong>Microneedling:</strong> Creates controlled micro-channels to stimulate collagen and elastin production.</li>
              <li><strong>Hyaluronic Acid Mask:</strong> Deeply hydrates and soothes the skin, locking in moisture.</li>
              <li><strong>Tone & Moisturize:</strong> Rebalances pH levels and protects the skin barrier.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Proven Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Brighter, glowing complexion instantly</li>
              <li>Smoother skin texture and tone</li>
              <li>Reduction in fine lines and wrinkles over time</li>
              <li>Increased absorption of active skincare ingredients</li>
              <li>Improved skin elasticity and firmness</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Who Should Try the Million Dollar Facial?</h3>
            <p>
              This treatment is suitable for most skin types (except active acne or extremely sensitive skin). It is perfect for anyone looking to combat signs of aging, sun damage, pigmentation, or dullness, and is ideal before a big event.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Why Choose Ella's Beautique for Your Million Dollar Facial in Bolton?</h3>
            <p>
              As a certified Million Dollar Facial provider, Ella brings expertise and precision to every treatment. We customize the experience to your skin's unique needs, ensuring safe, effective, and transformative results right here in Bolton.
            </p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Ready to Experience the Million Dollar Glow?</h4>
            <p className="mb-6 text-pink-800 text-lg">
              Treat yourself to the ultimate skincare luxury. Book your session today.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "How Shaun and Get Found Now Helped Me Put Ella's Beautique on the Map",
      author: 'Ella Baines',
      date: 'January 26, 2026',
      readTime: '2 min read',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1616240794998-83a1224065c5',
      imageAlt: "Success story for Ella's Beautique in Bolton",
      excerpt: "Hi, I'm Ella, the owner of Ella's Beautique in Bolton. I wanted to share how working with Shaun and Get Found Now completely transformed my salon's online presence.",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Hi, I'm Ella, the owner of Ella's Beautique in Bolton, Greater Manchester. I wanted to share how working with Shaun and Get Found Now completely transformed my salon's online presence—and what a difference it's made to my business in just a few short weeks!
          </p>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">My Challenge: Standing Out in a Crowded Beauty Scene</h3>
            <p>
              When I first opened Ella's Beautique, I put my heart and soul into offering the best facials and beauty treatments in Bolton. But with so many salons around, I struggled to stand out online. I knew that loads of people searched for "facials Bolton" every month (over 140 searches on Google!), but my website just wasn't showing up where it mattered. It felt like I was invisible to potential new clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">The Turning Point: Partnering with Shaun and Get Found Now</h3>
            <p className="mb-4">
              Everything changed when I started working with Shaun and the Get Found Now team. They understood exactly what I needed: to get in front of people searching for facials in Bolton and to bring new clients through my door. That's when they built me a brand new website—facialsnearmebolton.co.uk.
            </p>
            <p className="mb-4">But it wasn't just about having a pretty website. Shaun and his team:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Did deep keyword and competitor research to target the right local searches.</li>
              <li>Optimised every page for Google, making sure the site was fast, mobile-friendly, and easy to navigate.</li>
              <li>Created compelling, locally-focused content that spoke directly to people looking for facials in Bolton.</li>
              <li>Worked on my local SEO, from my Google Business Profile to making sure my business info was consistent everywhere online.</li>
              <li>Tracked all the results, so I could see the growth week by week.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">The Results: Real Growth, Real Fast</h3>
            <p className="mb-4">
              The results have honestly blown me away:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>My website now ranks at the very top for "facials Bolton"—right where I always wanted to be!</li>
              <li>In just over a week, I welcomed 4 brand new clients who found me through the website.</li>
              <li>2 of those clients rebooked immediately for the following week and even scheduled in for other treatments like massage, not just facials.</li>
              <li>On average, each client is worth around £50 per visit—and with repeat bookings and add-on services, that number keeps growing!</li>
              <li>I've run the numbers, and the return on investment from the cost of my new website is going to be well over 100 times. It's honestly the best business decision I've made.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Why I'm Sharing This</h3>
            <p>
              If you're a beauty business owner and you feel stuck, lost, or invisible online, I completely understand. I was there not long ago. Working with Shaun and Get Found Now didn't just give me a website—it gave me a whole new level of confidence and a steady stream of new clients. I'm not just getting more facial bookings; I'm also cross-selling other services and building lasting relationships with my clients.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">My Advice</h3>
            <p>
              Don't try to do everything yourself. If you want to grow your business, get help from professionals who understand local SEO and the beauty industry. I'm so grateful I found Shaun and the Get Found Now team. They genuinely care about helping small businesses like mine succeed.
            </p>
            <p className="mt-4 font-semibold italic">— Ella</p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Ready to Experience the Difference?</h4>
            <p className="mb-6 text-pink-800 text-lg">
              If you're in Bolton and want to treat yourself to the best facial or a relaxing massage, visit facialsnearmebolton.co.uk and book in—I'd love to welcome you to Ella's Beautique.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Enhance Your Facial Treatments and Self-Care Routine with Olylife PEMF Therapy',
      author: 'Ella Baines',
      date: 'February 10, 2026',
      readTime: '3 min read',
      category: 'Wellness Technology',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      imageAlt: 'Wellness and relaxation environment',
      excerpt: 'Discover how combining pulsed electromagnetic field (PEMF) therapy with your professional facial treatments can lead to deeper relaxation and improved skin health.',
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            At Ella's Beautique, we are always looking for the latest innovations to help you look and feel your absolute best. One of the most exciting additions to our wellness toolkit is Olylife PEMF (Pulsed Electromagnetic Field) Therapy. This non-invasive technology works at a cellular level to promote healing, reduce inflammation, and enhance your body's natural recovery processes.
          </p>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">What is PEMF Therapy?</h3>
            <p>
              PEMF therapy involves the use of low-frequency electromagnetic fields to "recharge" your cells. Think of it as a battery charger for your body. By stimulating cellular activity, it can help improve circulation, reduce pain, and support overall vitality.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Why Combine PEMF with Your Facials?</h3>
            <p className="mb-4">
              Combining Olylife PEMF therapy with a professional facial creates a holistic treatment that addresses both beauty and wellness:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Enhanced Product Absorption:</strong> Improved micro-circulation helps your skin better absorb the high-quality serums used during your treatment.</li>
              <li><strong>Reduced Inflammation:</strong> Ideal for calming skin after intensive treatments like chemical peels or microneedling.</li>
              <li><strong>Deep Relaxation:</strong> PEMF helps balance the nervous system, allowing you to reach a state of deep calm that enhances the overall facial experience.</li>
              <li><strong>Natural Glow:</strong> By boosting cellular health, your skin appears more vibrant and refreshed from the inside out.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">The Olylife Difference</h3>
            <p>
              Olylife devices are designed for safety and efficacy, providing a gentle yet powerful wellness boost. Whether you're dealing with daily stress or looking to maximize your anti-aging results, incorporating this technology into your routine can make a significant difference.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Conclusion</h3>
            <p>
              Investing in your skin is an investment in your confidence. By pairing advanced technologies like Olylife PEMF with our signature facials, we're bringing a new dimension of wellness to Bolton. We're proud to offer these innovative solutions to our local community.
            </p>
            <p className="mt-4">
              To learn more about the profound benefits of pulsed electromagnetic field therapy and how it can transform your health, we encourage you to visit{' '}
              <a 
                href="https://pemftherapyuk.co.uk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-600 hover:text-pink-800 underline font-medium"
              >
                PEMF Therapy UK
              </a>.
            </p>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl mt-10 border border-pink-100 shadow-sm">
            <h4 className="text-2xl font-bold text-pink-900 mb-4 font-montserrat">Experience the Future of Wellness</h4>
            <p className="mb-6 text-pink-800 text-lg">
              Book your next facial and ask us about adding Olylife PEMF therapy to your session for the ultimate rejuvenation.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>📞</span> <a href="tel:07912611390" className="hover:underline">07912 611390</a>
              </p>
              <p className="flex items-center gap-3 text-pink-900 font-semibold text-lg">
                <span>✉️</span> <a href="mailto:info@facialsnearmebolton.co.uk" className="hover:underline">info@facialsnearmebolton.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skincare Blog | Expert Tips & Success Stories | Ella's Beautique</title>
        <meta name="description" content="Read our professional skincare blog for treatment guides, expert tips, and the success story of how Ella's Beautique became Bolton's top-rated facial salon." />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Skincare Blog
              </h1>
              <p className="text-2xl text-gray-300">
                Expert tips, treatment guides, and professional skincare advice
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f1f1f1] rounded-2xl overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-[#1a1a1a] group-hover:text-pink-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-xs">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      </div>
                      
                      {post.path ? (
                        <Link 
                          to={post.path}
                          className="flex items-center space-x-2 font-semibold text-[#1a1a1a] hover:text-pink-600 transition-colors group/btn"
                        >
                          <span>Read Article</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <button 
                          onClick={() => setSelectedPost(post)}
                          className="flex items-center space-x-2 font-semibold text-[#1a1a1a] hover:text-pink-600 transition-colors group/btn"
                        >
                          <span>Read Article</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-[#f1f1f1] rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Want Personalized Skincare Advice?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Book a consultation with our expert team for personalized recommendations tailored to your unique skin needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-10 py-4 rounded-full text-lg font-bold text-[#1a1a1a] transition-all hover:shadow-2xl hover:scale-110"
                  style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && !selectedPost.path && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden my-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="text-gray-900" />
                </button>

                {/* Article Header Image */}
                <div className="h-64 sm:h-80 w-full relative">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.imageAlt || selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-pink-600 text-xs font-bold uppercase tracking-wider mb-3">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold leading-tight font-montserrat">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>

                {/* Article Meta & Content */}
                <div className="p-8 sm:p-10 max-h-[70vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold">
                        {selectedPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{selectedPost.author}</p>
                        <p className="text-xs text-gray-500">Aesthetician</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{selectedPost.date}</p>
                      <p>{selectedPost.readTime}</p>
                    </div>
                  </div>

                  <div className="prose prose-pink max-w-none">
                    {selectedPost.content}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
