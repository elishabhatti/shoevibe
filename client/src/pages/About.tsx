import { motion } from 'framer-motion';

// About.tsx - ShoeVibe
// NOTE: replace the image URLs in `images` with direct image file URLs you have rights to use.

const images = [
  // These are pages where high-quality real shoe-store images were found. Prefer direct image file URLs or licensed assets for production.
  'https://www.ibanezshaw.com/stanley-eisenman',
  'https://dissolve.com/stock-photo/Male-cobbler-traditional-shoe-workshop-sewing-royalty-free-image/101-D25-90-021',
  'https://in.pinterest.com/pin/94364554684587722/'
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: 'beforeChildren' } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const  About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 prose prose-lg text-gray-800">
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold">About ShoeVibe</h1>
        <p className="mt-2 text-gray-600">Where every step is crafted with care — style that moves with you.</p>
      </motion.header>

      <motion.main variants={containerVariants} initial="hidden" animate="visible">
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>
            Founded in 2018 in the heart of Karachi, ShoeVibe was born from two friends with one shared obsession: what a
            shoe should feel like when you walk. We started with a single boutique and a simple promise — to blend
            comfort, style, and authenticity into footwear that lasts. Over time that promise led us to partner with
            local artisans, refine manufacturing practices, and develop collections that fit into people’s real lives.
          </p>

          <p>
            What distinguishes ShoeVibe is our focus on detail. From the first sketch to the last stitch, every pair is
            evaluated for comfort, durability and design integrity. That approach helped us grow into a community-driven
            brand: customers who return, recommend, and inspire new ideas.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-semibold">Craftsmanship & Quality</h2>
            <p>
              We work with trusted manufacturers and skilled craftsmen who share our standards. Materials are selected
              for function and feel — premium leathers, breathable textiles, and soles designed for grip and longevity.
              We run fit tests, wear-tests, and real-world checks in different climates so that what looks good also
              performs well day after day.
            </p>

            <ul className="mt-4 list-inside list-disc text-gray-700">
              <li>Rigorous fit and comfort testing</li>
              <li>Durable materials and bonded construction</li>
              <li>Transparent sourcing & ethical partners</li>
            </ul>
          </div>

          <figure className="rounded-lg overflow-hidden shadow-sm">
            <img
              // replace with a direct image URL (these currently point to pages where images were found)
              src={images[0]}
              alt="Modern shoe store interior showcasing curated footwear displays"
              className="w-full h-64 object-cover"
            />
            <figcaption className="text-sm text-gray-500 p-3">A modern retail layout built to highlight craft and detail.</figcaption>
          </figure>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-semibold">Design Philosophy</h2>
          <p>
            Our design philosophy is simple: style with purpose. We believe aesthetics should enhance usability rather than
            hinder it. Each collection starts with who will wear the shoe — their needs, climate, and how they move — and
            proceeds through iterative prototyping until the balance between comfort and statement is right.
          </p>

          <blockquote className="border-l-4 pl-4 italic text-gray-700 mt-4">
            "Design should serve the step — the rest comes after." — ShoeVibe Design Team
          </blockquote>
        </motion.section>

        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <figure className="rounded-lg overflow-hidden shadow-sm order-2 md:order-1">
            <img src={images[1]} alt="Cobbler handcrafting a shoe in a traditional workshop" className="w-full h-64 object-cover" />
            <figcaption className="text-sm text-gray-500 p-3">Our artisan partners — where skill meets patience.</figcaption>
          </figure>

          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold">Sustainability & Ethics</h3>
            <p>
              We care about the planet and the people who make our shoes. Wherever possible we use lower-impact
              materials and support factories that follow fair labor practices. We’re actively reducing waste through
              smarter pattern use and responsible packaging, and pursuing improvements in every season.
            </p>

            <p className="mt-3">
              We don’t claim perfection — but we commit to continuous improvement, to being honest about trade-offs,
              and to choosing better where it makes a measurable difference.
            </p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold">Community & Experience</h2>
          <p>
            ShoeVibe is built on relationships: with customers, with local makers, and with the city scenes that inspire us.
            We run community events, fit clinics, and limited drops that test new ideas. Our online experience focuses on
            helping you find the right fit — strong size guides, video try-ons, and a friendly support team ready to help.
          </p>

          <p className="mt-3">
            When you shop at ShoeVibe, you become part of a design loop — your feedback shapes future releases and
            refinements.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold">Why Choose ShoeVibe?</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Fit Guarantee</h4>
              <p className="text-sm text-gray-600 mt-1">Clear size guides + easy returns to ensure the right fit, every time.</p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Premium Materials</h4>
              <p className="text-sm text-gray-600 mt-1">We select durable, comfortable materials that stand up to real life.</p>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold">Timeless + Trend</h4>
              <p className="text-sm text-gray-600 mt-1">Designs that feel modern yet age gracefully — created to last.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-semibold">Meet the Team</h2>
          <p>
            A small, passionate team of designers, product managers and quality specialists powers ShoeVibe. We mix local
            craftsmanship with global design influences and test prototypes in the streets where our customers live.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-2xl font-semibold">Join Our Journey</h2>
          <p className="max-w-2xl mx-auto">
            Whether you're looking for everyday comfort, an elevated statement pair, or a reliable work shoe — we design
            with you in mind. Follow our drops, visit our store, or reach out to our team. Let’s make every step count.
          </p>

          <figure className="mt-6 rounded-lg overflow-hidden shadow-sm mx-auto max-w-3xl">
            <img src={images[2]} alt="Rows of sneakers displayed on wooden shelves in a bright store" className="w-full h-72 object-cover" />
            <figcaption className="text-sm text-gray-500 p-3">Curated displays — every shelf tells a story.</figcaption>
          </figure>
        </motion.section>

        <motion.footer variants={itemVariants} className="pt-8 border-t">
          <p className="text-sm text-gray-600">Contact: hello@shoevibe.com | Visit: 22 Market Lane, Karachi</p>
        </motion.footer>
      </motion.main>
    </div>
  );
}

export default About