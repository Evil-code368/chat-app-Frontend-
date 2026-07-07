import React from "react";

const Safety = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900 sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-4xl font-bold">Safe Chatting Guide</h1>
          <p className="mt-2 text-gray-400">Effective Date: July 6, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold text-white">ChatLove</span>. Our goal is to provide a fun, friendly, and respectful environment where people from around the world can meet through anonymous conversations.
          </p>

          <p className="text-lg leading-relaxed">
            While we work to maintain a safe platform, online conversations always involve some level of risk. This guide explains how you can protect yourself and enjoy a safer chatting experience.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Stay Anonymous</h2>
            <p className="mb-4">Our platform is designed for anonymous conversations.</p>
            <p className="mb-4">You do not need to share personal information to enjoy chatting with others.</p>
            <p className="mb-4">For your safety, avoid sharing:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Your full name</li>
              <li>Home address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>School or workplace</li>
              <li>Government-issued identification</li>
              <li>Passport or driver's license details</li>
              <li>Banking or payment information</li>
              <li>Passwords or verification codes (OTP)</li>
              <li>Your exact live location</li>
            </ul>
            <p className="text-yellow-300">Remember that once you share personal information with another user, it may no longer be private.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Be Respectful</h2>
            <p className="mb-4">Treat everyone with kindness and respect.</p>
            <p className="mb-4">Good conversations start with:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Being polite</li>
              <li>Listening to others</li>
              <li>Respecting different opinions</li>
              <li>Ending conversations respectfully if they are not a good match</li>
            </ul>
            <p>Everyone deserves to feel safe while using the platform.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Never Feel Pressured</h2>
            <p className="mb-4">You should never feel pressured to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Share personal information</li>
              <li>Send photos</li>
              <li>Continue a conversation</li>
              <li>Click unknown links</li>
              <li>Download files from strangers</li>
              <li>Move the conversation to another app</li>
            </ul>
            <p className="text-green-400">If something makes you uncomfortable, you can simply leave the chat.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Be Careful with Photos</h2>
            <p className="mb-4">If our platform allows photo sharing:</p>
            <p className="mb-4">Only share photos you are comfortable sharing.</p>
            <p className="mb-4">Never send:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Government IDs</li>
              <li>Bank cards</li>
              <li>Personal documents</li>
              <li>Private or intimate images</li>
              <li>Images containing your home address or other sensitive information</li>
            </ul>
            <p>Think carefully before sending any photo. Once shared, you may not be able to control how another person uses it.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Watch for Scams</h2>
            <p className="mb-4">Unfortunately, some people use online chat platforms to scam others.</p>
            <p className="mb-4">Be cautious if someone:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Asks for money</li>
              <li>Requests gift cards</li>
              <li>Wants cryptocurrency</li>
              <li>Promises easy income</li>
              <li>Claims to be in an emergency and needs financial help</li>
              <li>Asks for your banking details</li>
              <li>Requests passwords or verification codes</li>
            </ul>
            <p className="text-red-400 font-semibold">Never send money to someone you met through anonymous chat.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Be Aware of Fake Profiles</h2>
            <p className="mb-4">Anonymous chat means people can pretend to be someone they are not.</p>
            <p className="mb-4">Do not assume another user's:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Name</li>
              <li>Age</li>
              <li>Gender</li>
              <li>Location</li>
              <li>Occupation</li>
              <li>Profile details</li>
            </ul>
            <p>Always use your own judgment.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Avoid Clicking Unknown Links</h2>
            <p className="mb-4">Do not click links sent by strangers unless you completely trust the source.</p>
            <p className="mb-4">Links may lead to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Scam websites</li>
              <li>Malware</li>
              <li>Phishing pages</li>
              <li>Fake login pages</li>
            </ul>
            <p>If you receive suspicious links, leave the conversation and report the user if appropriate.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Report Inappropriate Behavior</h2>
            <p className="mb-4">If another user:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Harasses you</li>
              <li>Threatens you</li>
              <li>Sends inappropriate content</li>
              <li>Attempts to scam you</li>
              <li>Shares illegal content</li>
              <li>Violates our Terms of Use</li>
            </ul>
            <p className="mb-4">Please use the Report feature.</p>
            <p className="text-purple-300">Reports help us investigate abuse and improve the safety of our community.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Block or Skip Users</h2>
            <p className="mb-4">Not every conversation will be enjoyable.</p>
            <p className="mb-4">If you are uncomfortable:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Skip to the next stranger.</li>
              <li>End the conversation.</li>
              <li>Block or report the user if those features are available.</li>
            </ul>
            <p>You never have to continue a conversation you don't want.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Protect Your Devices</h2>
            <p className="mb-4">For additional security:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Keep your browser updated.</li>
              <li>Use antivirus software where appropriate.</li>
              <li>Avoid downloading files from strangers.</li>
              <li>Do not install software recommended by unknown users.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Parents and Guardians</h2>
            <p className="mb-4">If you are a parent or guardian, we encourage you to discuss online safety with younger users.</p>
            <p className="mb-4">Talk about:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Protecting personal information</li>
              <li>Recognizing scams</li>
              <li>Respectful communication</li>
              <li>Reporting inappropriate behavior</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="mb-4">We work to make <span className="font-bold text-white">ChatLove</span> a welcoming and safer place by:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Investigating reports of abuse</li>
              <li>Taking action against users who violate our Terms</li>
              <li>Improving moderation tools</li>
              <li>Monitoring for spam and harmful activity</li>
              <li>Updating our safety measures as the platform evolves</li>
            </ul>
            <p>While we strive to provide a safer experience, no online platform can guarantee that every interaction will be risk-free.</p>
          </section>

          {/* Section 13 */}
          <section className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/20 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Remember</h2>
            <p className="mb-4">Before every conversation, ask yourself:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Am I protecting my privacy?</li>
              <li>Would I share this information with a stranger in person?</li>
              <li>Do I feel comfortable continuing this conversation?</li>
              <li>Is this request reasonable?</li>
            </ul>
            <p className="text-green-300 font-semibold mb-4">If the answer is "no," it's okay to leave the chat.</p>
            <p className="text-lg font-semibold text-white">Your safety comes first.</p>
          </section>

          <p className="text-center text-lg text-cyan-300 mt-8">
            Thank you for helping us create a respectful, enjoyable, and safer community for everyone.
          </p>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>© 2026 ChatLove. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
