import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delivery Policy | Rank Link Agency',
  description: 'Learn about Rank Link Agency delivery timelines and how we handle your guest post orders.',
};

export default function DeliveryPolicyPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen">
      <PageHeader
        title="Delivery Policy"
        subtitle="Fast, reliable delivery without compromising on quality"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-700 leading-relaxed">

        <p className="text-sm text-gray-400 mb-10">Last updated: May 2025</p>

        <p className="mb-8 text-lg">
          We know that timely delivery matters in digital marketing. Whether you are running a campaign with a tight deadline or building a long-term SEO strategy, Rank Link Agency is committed to delivering your orders efficiently and without cutting corners on quality. This Delivery Policy outlines how we handle order fulfilment, timelines, and communication throughout the process.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">1. Standard Delivery Timeframes</h2>
        <p className="mb-4">
          Our standard delivery windows vary based on the type of service ordered:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li><strong>Guest post placement (client-provided article):</strong> 1–2 working days from order confirmation</li>
          <li><strong>Guest post with content writing:</strong> 2–4 working days, depending on the article length and complexity</li>
          <li><strong>Premium site placements (DA/DR 75+):</strong> 3–5 working days, as these require additional outreach and approval from premium publishers</li>
          <li><strong>Press release distribution:</strong> 1–3 working days after article approval</li>
        </ul>
        <p className="mb-6">
          All timelines are counted from the moment we receive your complete order details and confirm payment. Orders with incomplete information will not enter the production queue until all required details are provided.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">2. Bulk and Large Orders</h2>
        <p className="mb-6">
          For bulk orders involving 5 or more placements, we will provide a custom delivery schedule at the time of order confirmation. Bulk orders are processed systematically to maintain consistent quality across all placements. We recommend discussing bulk requirements with us in advance so we can allocate resources appropriately and plan the most efficient delivery timeline for your campaign.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">3. What &ldquo;Delivered&rdquo; Means</h2>
        <p className="mb-4">
          An order is considered delivered once the following has occurred:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
          <li>Your article has been published live on the agreed publisher website</li>
          <li>The backlink is active and pointing to your specified target URL</li>
          <li>A delivery report or live URL has been shared with you via email or WhatsApp</li>
        </ul>
        <p className="mb-6">
          We always send a delivery confirmation that includes the live link to the published post, the domain details, and the anchor text used, so you can verify the placement yourself.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">4. Delays and Notifications</h2>
        <p className="mb-6">
          While we make every effort to meet the standard delivery windows, occasional delays may occur due to factors such as publisher availability, content revision requirements, or unusually high order volume. In any such case, we will proactively notify you as soon as we are aware of a potential delay and provide a revised estimated delivery date.
        </p>
        <p className="mb-6">
          We believe in clear and honest communication — you will never be left wondering about the status of your order. If you ever want an update, feel free to reach out to us directly and we will respond promptly.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">5. Revisions Before Publication</h2>
        <p className="mb-6">
          If we write the article for your guest post, we will share a draft with you before submission to the publisher. You are welcome to request up to two rounds of revisions at no extra charge. Additional revisions beyond this may affect the delivery timeline and could incur a small additional fee, which we will discuss with you before proceeding.
        </p>
        <p className="mb-6">
          Once you approve the article and it is submitted to the publisher, further content changes may not be possible — publisher websites typically do not allow edits after acceptance and publication.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">6. Order Confirmation and Communication</h2>
        <p className="mb-4">After placing an order, here is what you can expect:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-600">
          <li><strong>Confirmation within 24 hours:</strong> We will acknowledge your order and confirm all details</li>
          <li><strong>Progress updates:</strong> For longer orders, we will keep you updated as work progresses</li>
          <li><strong>Delivery notification:</strong> You will receive a message with the live URL as soon as your post is published</li>
        </ol>
        <p className="mb-6">
          All communication is handled through email or WhatsApp. We recommend using WhatsApp for faster responses, especially for urgent or time-sensitive orders.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">7. Quality Assurance</h2>
        <p className="mb-6">
          Every order goes through an internal quality check before delivery. We verify that the published article meets our content standards, the backlink is correctly placed and follows the agreed format, and the publisher website matches the DA, DR, and niche criteria you ordered. We do not consider an order complete until these checks are passed — even if it means a slight delay.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          For urgent delivery inquiries or to discuss bulk order scheduling, reach out to us directly:
        </p>
        <ul className="list-none space-y-1 mb-6 text-gray-600">
          <li><strong>Email:</strong> <a href="mailto:admin@ranklinkagency.com" className="text-[#00BCD4] hover:underline">admin@ranklinkagency.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/923157588685" className="text-[#00BCD4] hover:underline">+92 315 7588685</a></li>
        </ul>

      </div>
    </div>
  );
}
