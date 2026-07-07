import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-gray-400">Effective Date: July 6, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold text-white">ChatLove</span> ("we," "our," or "us"). This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use our anonymous stranger chat platform (the "Service").
          </p>

          <p className="text-lg leading-relaxed">
            By using the Service, you acknowledge that you have read and understood this Privacy Policy.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Information You Provide</h3>
            <p className="mb-4">Depending on how you use the Service, we may collect information that you voluntarily provide, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Nickname or display name</li>
              <li>Age (or age range, if applicable)</li>
              <li>Profile preferences (such as language or interests, if available)</li>
              <li>Messages you choose to send during chats</li>
              <li>Images you choose to share using the photo-sharing feature</li>
              <li>Reports or feedback you submit</li>
              <li>Messages you send to our support team</li>
            </ul>
            <p>Providing optional information is your choice, but some features may not function without it.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Information Collected Automatically</h3>
            <p className="mb-4">When you access the Service, certain technical information may be collected automatically, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Language settings</li>
              <li>Time zone</li>
              <li>Date and time of access</li>
              <li>Pages visited</li>
              <li>Session duration</li>
              <li>Referral URLs</li>
              <li>Error logs</li>
              <li>Connection information</li>
            </ul>
            <p>This information helps us operate, secure, and improve the Service.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">Cookies and Similar Technologies</h3>
            <p className="mb-4">We may use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Keep you signed in (if accounts are introduced)</li>
              <li>Remember preferences</li>
              <li>Improve website performance</li>
              <li>Detect abuse</li>
              <li>Measure website traffic</li>
              <li>Support advertising where applicable</li>
            </ul>
            <p>Most browsers allow you to control or disable cookies through browser settings. Disabling cookies may affect certain features of the Service.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We may use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and operate the Service</li>
              <li>Match you with other users</li>
              <li>Deliver messages and shared images</li>
              <li>Improve website functionality</li>
              <li>Detect spam, fraud, abuse, and security threats</li>
              <li>Investigate reports of misconduct</li>
              <li>Respond to customer support requests</li>
              <li>Enforce our Terms of Use</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage trends and improve the user experience</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Anonymous Chat</h2>
            <p className="mb-4">Our Service is designed to facilitate anonymous conversations.</p>
            <p className="mb-4">We do not require users to reveal their real identity to participate.</p>
            <p className="mb-4">However, messages and content shared during chats may be processed to deliver the Service, investigate abuse, and maintain platform safety.</p>
            <p>Please avoid sharing sensitive personal information with other users.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Photo Sharing</h2>
            <p className="mb-4">If you use the photo-sharing feature:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Images you upload are processed to deliver them to the other participant.</li>
              <li>Uploaded images may be temporarily stored to facilitate delivery and moderation.</li>
              <li>Images may be reviewed if reported for violating our Terms of Use or applicable law.</li>
            </ul>
            <p>Do not upload content that is illegal, infringes another person's rights, or violates our Terms.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. How We Share Information</h2>
            <p className="mb-4 font-semibold text-purple-300">We do not sell your personal information.</p>
            <p className="mb-4">We may share information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With service providers that help us operate the Service (such as cloud hosting or image storage providers).</li>
              <li>When required by law, court order, or lawful government request.</li>
              <li>To investigate fraud, abuse, or security incidents.</li>
              <li>To protect the rights, safety, or property of users or the public.</li>
              <li>In connection with a merger, acquisition, or sale of all or part of our business.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="mb-4">We retain information only for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Provide the Service</li>
              <li>Resolve disputes</li>
              <li>Prevent abuse</li>
              <li>Enforce our Terms</li>
              <li>Meet legal obligations</li>
            </ul>
            <p>Retention periods may vary depending on the type of information and the reason it was collected.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
            <p className="mb-4">We take reasonable administrative, technical, and organizational measures to help protect your information from unauthorized access, alteration, disclosure, or destruction.</p>
            <p>However, no method of transmitting or storing data over the internet is completely secure. We cannot guarantee absolute security.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
            <p className="mb-4">The Service is not intended for children below the minimum age required by applicable law.</p>
            <p className="mb-4">We do not knowingly collect personal information from children where prohibited by law.</p>
            <p>If we become aware that such information has been collected, we will take reasonable steps to delete it.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="mb-4">Our Service may use third-party providers to support functionality, security, analytics, advertising, or content delivery.</p>
            <p className="mb-4">Examples may include:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Website hosting providers</li>
              <li>Cloud storage providers</li>
              <li>Analytics providers</li>
              <li>Advertising partners</li>
              <li>Security and anti-abuse services</li>
            </ul>
            <p>These providers may process information on our behalf in accordance with their own privacy policies and applicable law.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p className="mb-4">Depending on where you access the Service, your information may be processed or stored in countries other than your own.</p>
            <p>Where required by applicable law, we take reasonable steps to help ensure appropriate safeguards are in place for international transfers.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Your Rights</h2>
            <p className="mb-4">Depending on the laws that apply to you, you may have rights regarding your personal information, including the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to your information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of certain information.</li>
              <li>Request restriction of processing in some circumstances.</li>
              <li>Object to certain processing activities where applicable.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p className="mt-4">Requests will be handled in accordance with applicable law.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time.</p>
            <p className="mb-4">The updated version will be posted on this page with a revised Effective Date.</p>
            <p>Your continued use of the Service after changes become effective indicates your acceptance of the updated Privacy Policy.</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us through the Contact page available on our website.</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Your Responsibility</h2>
            <p className="mb-4">Anonymous chat involves communicating with strangers.</p>
            <p className="mb-4">For your own safety, do not share:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Passwords</li>
              <li>Verification codes (OTP)</li>
              <li>Banking information</li>
              <li>Government identification numbers</li>
              <li>Home address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Exact real-time location</li>
            </ul>
            <p>You are responsible for the information you choose to share with other users.</p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Acceptance</h2>
            <p>By using the Service, you acknowledge that you have read, understood, and accepted this Privacy Policy.</p>
          </section>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>© 2026 ChatLove. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
