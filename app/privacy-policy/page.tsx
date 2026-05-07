import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rank Link Agency',
  description: 'Learn how Rank Link Agency collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen">
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy matters to us — here is how we handle your data"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-700 leading-relaxed">

        <p className="text-sm text-gray-400 mb-10">Last updated: May 2025</p>

        <p className="mb-8 text-lg">
          At Rank Link Agency, we take your privacy seriously. This Privacy Policy explains what information we collect when you use our website or services, how we use it, and the steps we take to keep it safe. We believe transparency is the foundation of trust, and we want you to feel completely confident when working with us.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          When you place an order, submit a contact form, or communicate with us through any channel, we may collect certain personal details to process and deliver your request. The types of information we collect include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Your full name and email address</li>
          <li>Your website URL and target keywords</li>
          <li>Order details, niche preferences, and content requirements</li>
          <li>Payment-related information (processed securely through third-party platforms)</li>
          <li>Communication history through email, WhatsApp, or our contact form</li>
        </ul>
        <p className="mb-6">
          We only collect what is genuinely necessary to fulfil your service request. We do not collect sensitive personal data such as government ID numbers, financial account details, or health information.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used solely to operate and improve our services. Specifically, we use your data to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Process and fulfil your guest posting or SEO service orders</li>
          <li>Communicate order updates, delivery confirmations, and support responses</li>
          <li>Personalise our service recommendations based on your niche and goals</li>
          <li>Send occasional service-related announcements or offers (you can opt out at any time)</li>
          <li>Improve our internal processes, website experience, and service quality</li>
        </ul>
        <p className="mb-6">
          We will never use your information for any purpose beyond what is described here without obtaining your explicit consent first.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">3. Data Sharing and Third Parties</h2>
        <p className="mb-4">
          We do not sell, rent, or trade your personal information to any third party under any circumstances. Your data belongs to you. However, in the normal course of delivering our services, we may share limited information with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Content writers and editors who work under strict confidentiality agreements</li>
          <li>Publisher website owners who need your article or anchor text to complete the placement</li>
          <li>Payment platforms (such as PayPal or Payoneer) solely for transaction processing</li>
        </ul>
        <p className="mb-6">
          All third parties we work with are required to handle your information responsibly and only for the specific purpose it was shared. We do not permit them to use your data for their own marketing or any unrelated purposes.
        </p>
        <p className="mb-6">
          In the unlikely event that we are legally required to disclose your information — such as in response to a court order or government request — we will notify you to the extent permitted by law before complying.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement industry-standard security measures to protect your data from unauthorised access, disclosure, alteration, or destruction. Our systems use encrypted connections (HTTPS), and access to client records is restricted to authorised team members only.
        </p>
        <p className="mb-6">
          While no method of transmission over the internet is 100% secure, we continuously review and strengthen our security practices to give you the highest level of protection possible.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">5. Cookies and Analytics</h2>
        <p className="mb-6">
          Our website may use cookies — small text files stored on your device — to improve your browsing experience, remember your preferences, and analyse site traffic. We may also use analytics tools (such as Google Analytics) to understand how visitors interact with our website so we can make improvements.
        </p>
        <p className="mb-6">
          You can control cookie settings through your browser at any time. Disabling cookies may limit certain features of our website, but will not affect your ability to place orders or contact us.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">6. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Request access to the personal data we hold about you</li>
          <li>Ask us to correct any inaccurate information</li>
          <li>Request deletion of your personal data (where legally permitted)</li>
          <li>Withdraw your consent to marketing communications at any time</li>
        </ul>
        <p className="mb-6">
          To exercise any of these rights, simply contact us at{' '}
          <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a>. We will respond within 5 business days.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">7. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the &ldquo;last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or how your data is handled, please do not hesitate to reach out:
        </p>
        <ul className="list-none space-y-1 mb-6 text-gray-600">
          <li><strong>Email:</strong> <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/923157588685" className="text-[#00BCD4] hover:underline">+92 315 7588685</a></li>
        </ul>
        <p>By continuing to use our website and services, you acknowledge that you have read and understood this Privacy Policy.</p>

      </div>
    </div>
  );
}
