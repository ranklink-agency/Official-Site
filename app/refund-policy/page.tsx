import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Rank Link Agency',
  description: 'Understand the Rank Link Agency refund policy for guest posting and SEO services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen">
      <PageHeader
        title="Refund Policy"
        subtitle="Fair, transparent, and straightforward — our refund commitment to you"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-700 leading-relaxed">

        <p className="text-sm text-gray-400 mb-10">Last updated: May 2025</p>

        <p className="mb-8 text-lg">
          At Rank Link Agency, we stand behind the quality of our work. We understand that trust is built through fairness, and our refund policy is designed to protect both our clients and the integrity of the services we deliver. Please read this policy carefully before placing an order.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1. Eligibility for a Refund</h2>
        <p className="mb-4">
          A refund may be requested under the following conditions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li><strong>Work has not yet started:</strong> If you cancel your order before our team begins working on it, you are eligible for a full refund. Please contact us as soon as possible to request a cancellation.</li>
          <li><strong>We fail to deliver the promised service:</strong> If we are genuinely unable to fulfil the service you paid for — for example, we cannot secure a placement on the agreed website — you will be entitled to a full or partial refund depending on the circumstances.</li>
          <li><strong>Significant deviation from order specifications:</strong> If the delivered work materially differs from what was agreed upon and we are unable to correct it, a partial or full refund may be considered on a case-by-case basis.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">2. Non-Refundable Situations</h2>
        <p className="mb-4">
          Refunds will not be issued in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>The order is already in progress or has been completed and delivered</li>
          <li>The guest post article has been published on the agreed publisher website</li>
          <li>Dissatisfaction based on SEO results, ranking changes, or traffic outcomes, as these are influenced by factors outside our control</li>
          <li>The client provided incorrect, incomplete, or misleading order information that affected the delivery</li>
          <li>The refund request is made after 14 days from the date of delivery without a valid reason</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">3. Permanent Backlink Guarantee</h2>
        <p className="mb-6">
          For all standard guest post placements we manage directly, we guarantee that published links will remain live permanently. If a link is removed from a website due to an error on our part or an issue with the publisher, we will replace it at no additional cost to you.
        </p>
        <p className="mb-6">
          This guarantee applies to placements on websites where we have a direct publisher relationship. It does not apply to press release distribution platforms or third-party news sites, where we do not have editorial control over published content after submission.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4. Third-Party Platform Placements</h2>
        <p className="mb-6">
          Some service packages include placements on external press release or news distribution platforms. On these platforms, links may be no-follow, temporary, or subject to the platform&apos;s own editorial policies. Because we have no control over third-party platform decisions regarding published content, we cannot guarantee the permanency or link type of these placements. This will always be communicated clearly before you purchase such a package.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">5. How to Request a Refund</h2>
        <p className="mb-4">
          If you believe you are eligible for a refund, please follow these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-600">
          <li>Contact us via email at <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a> or WhatsApp at <a href="https://wa.me/923157588685" className="text-[#00BCD4] hover:underline">+92 315 7588685</a></li>
          <li>Include your order details, payment reference, and a brief explanation of your refund request</li>
          <li>Our team will review your request and respond within 3 business days</li>
          <li>If approved, refunds are processed within 5–7 business days via the original payment method</li>
        </ol>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">6. Disputes and Resolution</h2>
        <p className="mb-6">
          We are committed to resolving all client concerns fairly and promptly. Before initiating any formal dispute through a payment platform, we strongly encourage you to contact us directly. In most cases, we are able to find a mutually satisfactory resolution — whether that is a replacement post, partial refund, or another solution — without the need for escalation.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">7. Our Commitment to You</h2>
        <p className="mb-6">
          We build our business on long-term client relationships, not one-time transactions. Client satisfaction is not just a policy statement — it is how we operate every day. If something goes wrong, we will always do our best to make it right. Your trust in Rank Link Agency means everything to us.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">8. Contact Us</h2>
        <ul className="list-none space-y-1 mb-6 text-gray-600">
          <li><strong>Email:</strong> <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/923157588685" className="text-[#00BCD4] hover:underline">+92 315 7588685</a></li>
        </ul>

      </div>
    </div>
  );
}
