import React from "react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="mt-2 text-gray-400">Effective Date: July 6, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold text-white">ChatLove</span> ("we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of our website, applications, and services (collectively, the "Service").
          </p>

          <p className="text-lg leading-relaxed">
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. About Our Service</h2>
            <p className="mb-4">Our Service provides anonymous one-to-one random text chat that allows users to communicate with strangers over the internet.</p>
            <p className="mb-4">Depending on the features available, users may also be able to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Share images during a conversation.</li>
              <li>Skip to another random user.</li>
              <li>Report abusive users.</li>
              <li>Block users.</li>
              <li>Use optional profile information such as a nickname or age.</li>
            </ul>
            <p>The Service is intended for social communication and entertainment.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="mb-4">You may use the Service only if you are legally permitted to do so under the laws that apply to you.</p>
            <p className="mb-4">If you are under the age of 18, you should use the Service only with permission from a parent or legal guardian if permitted by applicable law.</p>
            <p>By using the Service, you represent that you satisfy these eligibility requirements.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Anonymous Conversations</h2>
            <p className="mb-4">Our platform is designed for anonymous communication.</p>
            <p className="mb-4">We do not verify the identity, age, location, or personal information provided by users.</p>
            <p className="mb-4">Because conversations occur between independent users:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Other users may provide inaccurate information.</li>
              <li>Other users may not behave appropriately.</li>
              <li>You are responsible for deciding what information you choose to share.</li>
            </ul>
            <p>Never assume another user's identity or claims are accurate.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
            <p className="mb-4">You agree to use the Service responsibly and respectfully.</p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Harass, threaten, bully, or intimidate another person.</li>
              <li>Send unwanted repeated messages or spam.</li>
              <li>Use hateful, discriminatory, or abusive language.</li>
              <li>Encourage violence or illegal activity.</li>
              <li>Impersonate another person or organization.</li>
              <li>Attempt to deceive or scam other users.</li>
              <li>Disrupt the operation of the Service.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
            </ul>
            <p>You remain solely responsible for the content you send through the Service.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Content</h2>
            <p className="mb-4">The following content is strictly prohibited:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Child sexual abuse material or exploitation.</li>
              <li>Content involving minors in a sexual context.</li>
              <li>Non-consensual intimate images.</li>
              <li>Extreme graphic violence.</li>
              <li>Terrorist or extremist propaganda.</li>
              <li>Illegal drugs or criminal transactions.</li>
              <li>Malware, phishing, or malicious software.</li>
              <li>Fraud or financial scams.</li>
              <li>Copyright-infringing material.</li>
              <li>Content that violates applicable law.</li>
            </ul>
            <p className="text-red-400">Violations may result in immediate removal, suspension, or permanent bans and may be reported to appropriate authorities where required by law.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Photo Sharing</h2>
            <p className="mb-4">If image sharing is available, you agree that:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>You own the image or have permission to share it.</li>
              <li>The image does not violate another person's privacy or intellectual property rights.</li>
              <li>The image does not contain prohibited content.</li>
            </ul>
            <p>We may remove images or disable image-sharing privileges if they violate these Terms.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Protecting Your Privacy</h2>
            <p className="mb-4">For your own safety, we strongly recommend that you do not share:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Your full name.</li>
              <li>Home address.</li>
              <li>Phone number.</li>
              <li>Email address.</li>
              <li>Government identification numbers.</li>
              <li>Banking or payment information.</li>
              <li>Passwords or verification codes.</li>
              <li>Exact real-time location.</li>
            </ul>
            <p>Information you voluntarily share with another user is outside our control.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Reporting and Moderation</h2>
            <p className="mb-4">Users may report conversations or content that violates these Terms.</p>
            <p className="mb-4">We may investigate reports and take actions including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Issuing warnings.</li>
              <li>Removing content.</li>
              <li>Temporarily restricting access.</li>
              <li>Permanently banning users.</li>
              <li>Blocking devices or network identifiers where appropriate.</li>
            </ul>
            <p>We reserve the right to moderate the Service to help protect our users.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Service Availability</h2>
            <p className="mb-4">We aim to provide a reliable Service but cannot guarantee uninterrupted availability.</p>
            <p className="mb-4">The Service may be temporarily unavailable due to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Maintenance.</li>
              <li>Software updates.</li>
              <li>Security incidents.</li>
              <li>Technical failures.</li>
              <li>Events beyond our reasonable control.</li>
            </ul>
            <p>We may change, suspend, or discontinue features at any time.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
            <p className="mb-4">The Service, including its software, branding, logos, graphics, design, and original content, is owned by or licensed to us and is protected by applicable intellectual property laws.</p>
            <p>You may not copy, distribute, reverse engineer, or exploit any part of the Service except as permitted by law or with our written permission.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Disclaimer</h2>
            <p className="mb-4">The Service is provided on an "as is" and "as available" basis.</p>
            <p className="mb-4">We do not guarantee:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>That every match will be successful.</li>
              <li>That users will behave appropriately.</li>
              <li>That the Service will be uninterrupted or error-free.</li>
              <li>That information provided by users is accurate.</li>
            </ul>
            <p>Use the Service at your own discretion.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
            <p className="mb-4">To the extent permitted by applicable law, we are not liable for losses or damages arising from:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Your interactions with other users.</li>
              <li>User-generated content.</li>
              <li>Unauthorized access to your communications.</li>
              <li>Temporary interruptions of the Service.</li>
              <li>Decisions you make based on conversations with other users.</li>
            </ul>
            <p>Nothing in these Terms limits liability where such limitation is prohibited by applicable law.</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Suspension and Termination</h2>
            <p className="mb-4">We may suspend or terminate access to the Service if you:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Violate these Terms.</li>
              <li>Engage in harmful or unlawful conduct.</li>
              <li>Attempt to abuse or interfere with the Service.</li>
              <li>Repeatedly receive valid reports from other users.</li>
            </ul>
            <p>Termination may occur without prior notice where necessary to protect the Service or other users.</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to These Terms</h2>
            <p className="mb-4">We may update these Terms from time to time.</p>
            <p className="mb-4">The revised version will be published on this page with an updated Effective Date.</p>
            <p>Your continued use of the Service after changes become effective indicates your acceptance of the updated Terms.</p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Contact</h2>
            <p>If you have questions about these Terms, please contact us through the Contact page available on our website.</p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Acceptance</h2>
            <p>By accessing or using the Service, you acknowledge that you have read, understood, and agreed to these Terms of Use.</p>
          </section>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>© 2026 ChatLove. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
