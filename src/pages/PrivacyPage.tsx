import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navigation from '../sections/Navigation';

const PrivacyPage = () => {
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const main = mainRef.current;
    const header = headerRef.current;
    if (!main || !header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(main, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' });
      gsap.fromTo(header, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' });
      
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        gsap.fromTo(section, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.3 + index * 0.1, ease: 'power2.out' });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-gray grain-overlay">
      <Navigation />
      <main ref={mainRef} className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20" aria-label="Privacy Policy content">
        <article className="max-w-4xl mx-auto w-full">
          <header ref={headerRef} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white pt-[20]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 leading-tight">Privacy Policy</h1>
            <p className="text-sm sm:text-base md:text-lg text-brand-muted font-medium">Last Updated: March 5, 2025</p>
          </header>

          <section ref={(el) => { sectionRefs.current[0] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">1. Introduction</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              Troupe ("Company," "we," "our," or "us") operates the Troupe mobile application and related services (the "Service"). This Privacy Policy describes how we collect, use, disclose, and retain information about you when you use the Service. By using the Service, you agree to the practices described in this policy.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              If you do not agree with this Privacy Policy, you must not use the Service. We may update this policy from time to time; the "Last Updated" date above indicates when it was last revised.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              This Privacy Policy applies when you use Troupe on iOS (via the App Store), Android (via Google Play), or other platforms. We are not affiliated with, endorsed by, or acting on behalf of Apple Inc. or Google LLC.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[1] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">2. Information We Collect</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.1 Account and profile information.</strong> When you create an account, we collect the information you provide, such as your email address and, if you sign up with a third-party provider (e.g., Google), the identifier and basic profile data (e.g., name, email, profile photo) that the provider shares with us. You may also provide a display name, bio, skills, interests, projects, experience, optional GitHub username, and other profile fields.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.2 Authentication and session data.</strong> We use a third-party authentication provider to manage sign-in and sessions. This includes storing hashed passwords, session tokens, and refresh tokens. We do not store your plain-text password.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.3 Messages.</strong> When you send or receive messages through the Service, we store the content of those messages, associated metadata, and relationship data on our systems.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.4 Precise and derived location.</strong> If you grant the app permission to access your device's location, we collect precise GPS coordinates on our servers and use third-party geocoding services to convert coordinates into an approximate location such as city and country.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.5 Device and technical metadata.</strong> We may collect device type, operating system, app version, language preferences, IP address, and request metadata from our infrastructure and logging systems.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>2.6 Security and operational logs.</strong> We log security- and operations-related events, including authentication attempts, token validation, rate-limiting events, and other events necessary to maintain and secure the Service.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[2] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">3. How We Use Your Information</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              We use the information we collect to: (a) create and manage your account; (b) provide, maintain, and improve the Service; (c) display your profile to other users; (d) send service-related communications; (e) detect and prevent fraud and abuse; (f) enforce our Terms of Service; (g) comply with legal obligations; and (h) for other purposes described in this Privacy Policy or with your consent.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[3] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">4. Legal Basis for Processing (EEA/UK)</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              If you are in the European Economic Area or the United Kingdom, we process your personal data on the following bases: (a) performance of our contract with you; (b) our legitimate interests; (c) compliance with legal obligations; and (d) where we have obtained your consent.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[4] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">5. Data Retention</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              We retain your account and profile information for as long as your account is active. If you delete your account, we may retain certain data for a reasonable period thereafter where necessary for safety, security, fraud prevention, or legal compliance.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[5] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">6. Sharing and Disclosure</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.1 Other users.</strong> Other users may see your profile information and exchange messages with you when matched.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.2 Service providers.</strong> We use third-party service providers to operate the Service, including hosting, databases, authentication, geocoding, and push notifications.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              <strong>6.3 Legal and safety.</strong> We may disclose your information where necessary to comply with law, enforce our Terms, or protect rights and safety.
            </p>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[6] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">7. Security</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              We use industry-standard measures to protect your information, including encryption, secure authentication, and access controls. No method of transmission or storage is completely secure; we cannot guarantee absolute security of your data.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[7] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">8. International Transfers</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              Your information may be processed and stored in countries other than your country of residence. Where we transfer personal data from the EEA or UK, we implement appropriate safeguards.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[8] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">9. Children</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              The Service is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[9] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">10. Your Rights and Choices</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              You may access and update your profile information, delete your account, object to processing, withdraw consent, and request data portability where applicable. Contact us to exercise these rights.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[10] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">11. Updates to This Policy</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              We may update this Privacy Policy from time to time. We will post the updated policy and update the "Last Updated" date. Your continued use after updates constitutes acceptance.
            </p>
          </section>

          <section ref={(el) => { sectionRefs.current[11] = el; }} className="neo-card p-5 sm:p-6 md:p-8 lg:p-10 mb-5 sm:mb-6 md:mb-8 bg-white">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-gradient leading-tight">12. Contact</h2>
            <p className="mb-4 sm:mb-5 text-brand-text text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
              For questions about this Privacy Policy or our privacy practices, please contact us.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPage;
