import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Rank Link Agency',
  description: 'Read the Terms of Service governing the use of Rank Link Agency services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen">
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before placing an order"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-700 leading-relaxed">

        <p className="text-sm text-gray-400 mb-10">Last updated: May 2025</p>

        <p className="mb-8 text-lg">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Rank Link Agency website and all services we provide, including guest posting, link building, SEO content, and related digital marketing services. By placing an order or engaging with our services in any way, you confirm that you have read, understood, and agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1. Our Services</h2>
        <p className="mb-4">
          Rank Link Agency provides a range of digital marketing and SEO services, including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Guest posting on high-authority, niche-relevant websites</li>
          <li>Do-follow and contextual backlink building</li>
          <li>SEO content writing and article placement</li>
          <li>Niche-specific outreach and publisher relationship management</li>
          <li>Premium site placements on DA/DR 50+ and 75+ websites</li>
        </ul>
        <p className="mb-6">
          The specific deliverables, timelines, and pricing for each service are communicated at the time of order confirmation. We reserve the right to update or modify our service offerings at any time.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">2. Order Requirements</h2>
        <p className="mb-4">
          To ensure the best possible result for your campaign, we ask that all orders are submitted with clear and complete instructions, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Target URL(s) you want the backlink to point to</li>
          <li>Preferred anchor text or keywords</li>
          <li>Niche or topic category</li>
          <li>Any specific publisher preferences or restrictions</li>
          <li>Content guidelines, if you are providing the article</li>
        </ul>
        <p className="mb-6">
          Orders that are vague, incomplete, or unclear may be delayed while we seek clarification. We are not responsible for results that fall short of expectations due to insufficient or inaccurate order information provided by the client.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">3. Right to Refuse Orders</h2>
        <p className="mb-6">
          We reserve the right to decline or cancel any order at our sole discretion. Orders may be refused if the requested content or target website violates search engine guidelines, promotes illegal activities, contains harmful or misleading information, or conflicts with our ethical standards. In such cases, any payment received will be returned in full.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4. Link Types and Guarantees</h2>
        <p className="mb-4">
          The nature of the backlink delivered depends on the publisher website and placement type:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li><strong>Do-follow links</strong> are provided by default on our standard guest post placements and premium sites.</li>
          <li><strong>No-follow links</strong> may apply on certain platforms such as press release distribution sites or major news publications. This will be disclosed at the time of ordering.</li>
          <li><strong>Sponsored attributes</strong> may be required by some high-traffic publishers. We will always inform you in advance.</li>
        </ul>
        <p className="mb-6">
          We do not guarantee that every placement will result in a do-follow link unless it is explicitly stated in your selected service package. Please review your package details carefully before purchasing.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">5. SEO Results Disclaimer</h2>
        <p className="mb-6">
          We are honest about what backlinks can and cannot do. While high-quality guest posts from authoritative websites are proven to support SEO performance, we do not and cannot guarantee specific ranking improvements, traffic increases, or domain authority changes. Search engine algorithms are complex and continuously updated, and rankings depend on hundreds of factors beyond any single link.
        </p>
        <p className="mb-6">
          Our commitment is to deliver the highest-quality placements possible. The SEO outcome of those placements is ultimately determined by your overall site health, content quality, competition, and Google&apos;s algorithm — all of which are outside our direct control.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">6. Client Responsibilities</h2>
        <p className="mb-4">As a client, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Provide accurate and complete information with each order</li>
          <li>Ensure that the target URLs and content you submit do not violate any laws or third-party rights</li>
          <li>Communicate any changes or special requirements promptly</li>
          <li>Make timely payment according to the agreed pricing</li>
          <li>Not attempt to resell our services without prior written permission</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">7. Intellectual Property</h2>
        <p className="mb-6">
          Unless otherwise agreed in writing, any content we create for your guest post order is owned by you upon successful delivery and full payment. However, once a guest post article is published on a third-party website, the published content also becomes subject to that publisher&apos;s terms and policies, which may restrict modifications or removal.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">8. Limitation of Liability</h2>
        <p className="mb-6">
          Rank Link Agency shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, including but not limited to loss of revenue, traffic, or search rankings. Our total liability in any circumstance shall not exceed the amount you paid for the specific service in question.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">9. Changes to These Terms</h2>
        <p className="mb-6">
          We may update these Terms from time to time. Any changes will be reflected on this page with an updated date. Continued use of our services after changes are posted constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">10. Contact</h2>
        <p className="mb-4">For any questions about these Terms, please contact us:</p>
        <ul className="list-none space-y-1 mb-6 text-gray-600">
          <li><strong>Email:</strong> <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/923157588685" className="text-[#00BCD4] hover:underline">+92 315 7588685</a></li>
        </ul>

      </div>
    </div>
  );
}
