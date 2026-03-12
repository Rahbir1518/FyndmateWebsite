import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navigation from '../sections/Navigation';

const TermsPage = () => {
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const main = mainRef.current;
    const header = headerRef.current;
    if (!main || !header) return;

    const ctx = gsap.context(() => {
      // Fade-in animation for main content container
      gsap.fromTo(
        main,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );

      // Header card entrance
      gsap.fromTo(
        header,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
        }
      );

      // Slide-up animations for individual content sections
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            ease: 'power2.out',
          }
        );
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-gray grain-overlay">
      <Navigation />
      <main ref={mainRef} className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20" aria-label="Terms of Service content">
        <article className="max-w-4xl mx-auto w-full">
          {/* Back to Home Button */}
          

          {/* Header Card */}
          <header ref={headerRef} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white pt-[20]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 leading-tight">Terms of Service</h1>
            <p className="text-sm sm:text-base md:text-lg text-brand-muted font-medium">Last Updated: March 5, 2025</p>
          </header>

          {/* Section 1 */}
          <section ref={(el) => { sectionRefs.current[0] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">1. Introduction and Acknowledgement</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>1.1</strong> These Terms of Service ("Terms") constitute a legal agreement between you and Troupe ("Company," "we," "our," or "us") governing your access to and use of the FyndMate mobile application, website, and related services (collectively, the "Service").
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>1.2 ACKNOWLEDGEMENT:</strong> You acknowledge that these Terms are concluded between you and the Company only, and not with Apple Inc., Google LLC, or any of their affiliates or subsidiaries. The Company, not Apple or Google, is solely responsible for the Service and the content thereof. These Terms may not provide for usage rules that conflict with the Apple Media Services Terms and Conditions (for iOS) or Google Play Terms of Service (for Android) as of the effective date.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>1.3 NO PARTNERSHIP:</strong> You acknowledge that you do not have a partnership with Apple or Google, and that you will not represent yourself as an employee, agent, or official representative of Apple or Google while using the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>1.4</strong> By creating an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>1.5</strong> We may update these Terms from time to time as described in Section 16. Your continued use of the Service after updated Terms become effective constitutes your acceptance of the updated Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section ref={(el) => { sectionRefs.current[1] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">2. Scope of License</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.1</strong> Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the Service on any Apple-branded products or Android devices that you own or control, solely for your personal, non-commercial use, and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions (for iOS) or Google Play Terms of Service (for Android). The Service may be accessed by other accounts associated with you via Family Sharing, volume purchasing, or similar features where applicable.
            </p>
          </section>

          {/* Section 3 */}
          <section ref={(el) => { sectionRefs.current[2] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">3. Eligibility and Accounts</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>3.1 Minimum age.</strong> The Service is intended for individuals who are at least thirteen (13) years old. You may not use the Service if you are under 13. If you are between 13 and the age of majority in your jurisdiction (18 years of age in many countries), you may use the Service only with parental or guardian consent and if you have the legal capacity under applicable law to enter into these Terms.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>3.2 Accuracy of information.</strong> You agree to provide accurate, current, and complete information when creating your account and when providing profile information, including your name, age (via your date of birth), and other profile fields. You agree to keep such information accurate and up to date.
            </p>
            <div className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <p className="mb-2"><strong>3.3 Account security.</strong></p>
              <p className="ml-4 sm:ml-6 mb-2">(a) Authentication is provided via email/password and third-party sign-in (e.g., Google OAuth). Passwords are stored and managed by our authentication provider using industry-standard hashing.</p>
              <p className="ml-4 sm:ml-6 mb-2">(b) You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
              <p className="ml-4 sm:ml-6">(c) You must promptly notify us of any actual or suspected unauthorized use of your account or any other breach of security.</p>
            </div>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>3.4 Single user.</strong> Your account is personal to you. You may not share your account or login credentials with any other person or entity.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>3.5 Previous restrictions.</strong> We may prohibit you from creating a new account if your prior account has been suspended or terminated by us, as described in Section 10.
            </p>
          </section>

          {/* Section 4 */}
          <section ref={(el) => { sectionRefs.current[3] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">4. Description of the Service</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>4.1</strong> The Service is a social and matching platform designed to help users discover and connect with others for collaborative projects or similar goals. Features include, among others: creating and editing a personal profile (name, bio, skills, interests, projects, experience, optional GitHub username, limited location information); viewing and interacting with other profiles (e.g., likes, matches, blocks, reports); one-to-one messaging between matched users; optional push notifications regarding matches and messages; and optional location-based features such as showing an approximate city/country on profiles.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>4.2</strong> The specific features available to you may change over time as we improve or modify the Service.
            </p>
          </section>

          {/* Section 5 */}
          <section ref={(el) => { sectionRefs.current[4] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">5. User Responsibilities and Acceptable Use</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>5.1 General responsibilities.</strong> You are responsible for your use of the Service and for any information, text, messages, images, or other content that you submit, upload, display, or otherwise make available through the Service ("User Content").
            </p>
            <div className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <p className="mb-2"><strong>5.2 Prohibited conduct.</strong> You agree that you will not, and will not attempt to:</p>
              <p className="ml-4 sm:ml-6 mb-2">(a) Use the Service for any unlawful purpose or in violation of any applicable law or regulation.</p>
              <p className="ml-4 sm:ml-6 mb-2">(b) Harass, threaten, stalk, intimidate, or abuse any other user, or encourage others to do so.</p>
              <p className="ml-4 sm:ml-6 mb-2">(c) Transmit or promote content that is defamatory, obscene, hateful, discriminatory, pornographic, or otherwise objectionable.</p>
              <p className="ml-4 sm:ml-6 mb-2">(d) Engage in bullying, exploitation, or behavior that is reasonably likely to cause emotional or physical harm.</p>
              <p className="ml-4 sm:ml-6 mb-2">(e) Use the Service for fraud, scams, deceptive practices, or to solicit money or sensitive personal information from other users.</p>
              <p className="ml-4 sm:ml-6 mb-2">(f) Infringe, misappropriate, or violate any intellectual property, privacy, publicity, or other rights of any person.</p>
              <p className="ml-4 sm:ml-6 mb-2">(g) Send unsolicited or unauthorized commercial communications (spam).</p>
              <p className="ml-4 sm:ml-6 mb-2">(h) Use automated scripts, bots, crawlers, or scraping tools to access, collect data from, or interact with the Service without our prior written permission.</p>
              <p className="ml-4 sm:ml-6 mb-2">(i) Interfere with or disrupt the integrity or performance of the Service or any systems or networks connected to the Service.</p>
              <p className="ml-4 sm:ml-6 mb-2">(j) Attempt to access accounts, data, or systems that you are not authorized to access.</p>
              <p className="ml-4 sm:ml-6">(k) Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying ideas of the Service, except to the extent such restriction is prohibited by applicable law.</p>
            </div>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>5.3 Messaging conduct.</strong> When using the messaging features, you must communicate respectfully and lawfully; not send messages that are abusive, threatening, harassing, or sexually explicit; and understand that messages may be retained (including after soft deletion) for safety, security, and legal purposes as described in the Privacy Policy.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>5.4 Reporting and blocking.</strong> The Service provides tools to block and report other users. Use these tools responsibly and only in good faith. Submitting knowingly false or malicious reports is prohibited.
            </p>
          </section>

          {/* Section 6 */}
          <section ref={(el) => { sectionRefs.current[5] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">6. Location Features</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.1</strong> The Service may request access to your device's location services. With your permission, the Service collects precise GPS coordinates on the server side and uses them to derive an approximate location (such as city and country) using third-party geocoding services.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.2</strong> We do not display your raw latitude and longitude to other users. Other users may see city and country or other approximate information, subject to your location-sharing settings.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.3</strong> You can manage your location-sharing preference within the app and via your device's operating system settings.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.4 LOCATION DISCLAIMER:</strong> Location data may not be accurate. Your use of location-based features in this application is at your sole risk.
            </p>
          </section>

          {/* Section 7 */}
          <section ref={(el) => { sectionRefs.current[6] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">7. Content Ownership and License</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>7.1 Ownership.</strong> As between you and the Company, you retain all rights, title, and interest in and to your User Content, subject to the licenses granted in this Section 7.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>7.2 License to the Company.</strong> By submitting or making User Content available through the Service, you grant the Company a worldwide, non-exclusive, royalty-free, transferable, and sublicensable license to use, host, store, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content, solely to operate, provide, maintain, and improve the Service; to show your profile and related content to other users in accordance with the Service's functionality and your settings; to enforce these Terms and our policies and investigate abuse; and to comply with legal obligations.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>7.3</strong> We do not guarantee confidentiality of any User Content.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>7.4</strong> If you provide comments, suggestions, or ideas about the Service ("Feedback"), you agree that we may use such Feedback without restriction or compensation to you, and you hereby assign to us all rights in such Feedback.
            </p>
          </section>

          {/* Section 8 */}
          <section ref={(el) => { sectionRefs.current[7] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">8. Our Rights to Moderate and Remove Content</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>8.1</strong> We are not obligated to monitor any User Content. However, we may, in our discretion, review, remove, or restrict access to User Content or accounts where we believe it is necessary or appropriate, including where User Content violates these Terms or applicable law; poses a risk to safety, security, or rights; a user has been blocked or reported; or where required by law or lawful request of authorities.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>8.2</strong> We may also take technical and administrative measures to limit abusive behavior, including rate limiting, temporary restrictions, or permanent suspension of accounts, as described in Section 10.
            </p>
          </section>

          {/* Section 9 */}
          <section ref={(el) => { sectionRefs.current[8] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">9. Security and Fraud Prevention</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>9.1</strong> The Service uses authentication tokens, session validation, and rate-limiting mechanisms (including caching and token checks via infrastructure such as Redis) to help protect accounts and the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>9.2</strong> We log certain technical and security-related information, including IP addresses, user agent strings, request metadata, and event logs, to maintain and secure the Service; detect and prevent fraud, unauthorized access, and abuse; investigate incidents; and comply with legal obligations.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>9.3</strong> While we take reasonable steps to protect the Service, no online service can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 10 */}
          <section ref={(el) => { sectionRefs.current[9] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">10. Suspension and Termination</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>10.1</strong> We may suspend or terminate your access to some or all of the Service, with or without notice, if we reasonably believe you have violated these Terms or applicable law; your conduct creates risk or possible legal exposure for us, other users, or third parties; we are required to do so by law or competent authority; or we discontinue all or part of the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>10.2</strong> Where technically feasible and not prohibited by law, we will endeavor to take steps that are proportionate to the circumstances. We are under no obligation to provide notice or an opportunity to appeal in all cases, especially in cases of serious or repeated violations.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>10.3</strong> Upon termination of your account, your right to access and use the Service immediately ceases. We may retain certain data, including User Content and logs, as described in the Privacy Policy for a reasonable period for safety, fraud prevention, and legal purposes.
            </p>
          </section>

          {/* Section 11 */}
          <section ref={(el) => { sectionRefs.current[10] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">11. Third-Party Services</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>11.1</strong> The Service integrates with and depends on various third-party services, including third-party authentication providers (such as Google) for sign-in; geocoding providers (such as OpenStreetMap-based services) for converting GPS coordinates into city and country; and cloud infrastructure, hosting, database, and caching providers used to operate the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>11.2</strong> Your use of third-party services may be subject to additional terms and privacy policies of those providers. We are not responsible for third-party services beyond what is described in these Terms and our Privacy Policy.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>11.3 Third-Party Terms.</strong> You must comply with applicable third-party terms of agreement when using the Service (e.g., if you use Google Sign-In, you must comply with Google's Terms of Service; if the Service includes VoIP or wireless data features, you must not be in violation of your carrier's terms when using the Service).
            </p>
          </section>

          {/* Section 12 - Intellectual Property */}
          <section ref={(el) => { sectionRefs.current[11] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">12. Intellectual Property of the Company</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>12.1</strong> All rights, title, and interest in and to the Service (excluding User Content) are and will remain the exclusive property of the Company and its licensors. This includes all software, visual interfaces, graphics, design, trademarks, logos, domain names, and other proprietary rights.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>12.2</strong> Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the Service solely for your personal, non-commercial use.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>12.3</strong> You may not copy, modify, distribute, sell, lease, or otherwise exploit any part of the Service, nor may you reverse engineer or attempt to extract the source code of the software, except to the extent allowed by applicable law.
            </p>
          </section>

          {/* Section 12 - Indemnification (duplicate numbering) */}
          <section ref={(el) => { sectionRefs.current[12] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">12. Indemnification</h2>
            <p className="text-xs sm:text-sm text-brand-muted font-medium mb-3 sm:mb-4">(Note: Duplicate numbering in original file)</p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>12.1</strong> To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless the Company and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your access to or use of the Service; your User Content; your violation of these Terms; or your violation of any law or the rights of any third party.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>12.2</strong> We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate with our defense of such claim.
            </p>
          </section>

          {/* Section 13 */}
          <section ref={(el) => { sectionRefs.current[13] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">13. Disclaimers</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.1 No warranty.</strong> To the fullest extent permitted by applicable law, the Service is provided "as is" and "as available" without warranties of any kind, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.2</strong> We do not warrant that the Service will be uninterrupted, timely, secure, or error-free; that any defects or errors will be corrected; that the Service will be compatible with your devices or operating environment; or that the information available through the Service will be accurate, complete, or reliable.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.3</strong> You are solely responsible for your interactions with other users. We do not conduct background checks or verify user identities. Use caution and common sense in all interactions.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.4 Maintenance and Support.</strong> We are solely responsible for providing any maintenance and support services with respect to the Service, as specified in these Terms or as required under applicable law. You acknowledge that Apple and Google have no obligation whatsoever to furnish any maintenance or support services with respect to the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.5 Warranty.</strong> We are solely responsible for any product warranties. In the event of any failure of the Service to conform to any applicable warranty, you may notify Apple (for iOS) or Google (for Android), and Apple or Google will refund the purchase price for the Service to you, if any was paid. To the maximum extent permitted by applicable law, Apple and Google will have no other warranty obligation whatsoever with respect to the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>13.6 Product Claims.</strong> You acknowledge that we, not Apple or Google, are responsible for addressing any claims of yours or any third party relating to the Service or your possession or use of the Service, including product liability claims, any claim that the Service fails to conform to any applicable legal or regulatory requirement, and claims arising under consumer protection or similar legislation.
            </p>
          </section>

          {/* Section 14 */}
          <section ref={(el) => { sectionRefs.current[14] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">14. Legal Compliance</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>14.1</strong> You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
            </p>
          </section>

          {/* Section 15 */}
          <section ref={(el) => { sectionRefs.current[15] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">15. Limitation of Liability</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>15.1</strong> Nothing in these Terms is intended to exclude or limit any liability that cannot be excluded or limited under applicable law.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>15.2</strong> To the fullest extent permitted by law, in no event shall the Company or its affiliates, officers, directors, employees, or agents be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, including loss of profits, business, goodwill, data, or other intangible losses, arising out of or in connection with your access to, use of, or inability to use the Service; or any damages resulting from the conduct of other users or third parties.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>15.3</strong> To the fullest extent permitted by law, the total aggregate liability of the Company arising out of or relating to these Terms or the Service shall not exceed the amounts you have paid to us for use of the Service, if any, in the twelve (12) months preceding the event giving rise to the claim.
            </p>
          </section>

          {/* Section 16 */}
          <section ref={(el) => { sectionRefs.current[16] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">16. Changes to the Service and to These Terms</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>16.1</strong> We may modify, suspend, or discontinue all or part of the Service at any time, with or without notice.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>16.2</strong> We may update these Terms from time to time. When we do so, we will revise the "Last Updated" date at the top of the Terms and may provide additional notice where required by law or where we consider it appropriate.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>16.3</strong> Your continued use of the Service after the effective date of updated Terms constitutes your acceptance of those Terms. If you do not agree to the updated Terms, you must stop using the Service.
            </p>
          </section>

          {/* Section 17 */}
          <section ref={(el) => { sectionRefs.current[17] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">17. Governing Law and Dispute Resolution</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>17.1</strong> These Terms and any dispute arising out of or in connection with them or the Service shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law rules.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>17.2</strong> Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction], except where applicable law provides you with mandatory rights to bring claims in other forums.
            </p>
          </section>

          {/* Section 18 */}
          <section ref={(el) => { sectionRefs.current[18] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">18. Third-Party Beneficiary</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>18.1</strong> You acknowledge and agree that Apple, Google, and their respective subsidiaries are third-party beneficiaries of these Terms, and that upon your acceptance of these Terms, Apple and Google will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof.
            </p>
          </section>

          {/* Section 19 */}
          <section ref={(el) => { sectionRefs.current[19] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">19. Miscellaneous</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>19.1 Entire agreement.</strong> These Terms constitute the entire agreement between you and the Company with respect to the Service and supersede any prior or contemporaneous agreements relating to the Service.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>19.2 Severability.</strong> If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>19.3 No waiver.</strong> Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>19.4 Assignment.</strong> You may not assign or transfer these Terms or your rights and obligations under them without our prior written consent. We may assign or transfer these Terms, in whole or in part, without restriction.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              For questions about these Terms, you may contact us at: Email: [Contact Email] 
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default TermsPage;








