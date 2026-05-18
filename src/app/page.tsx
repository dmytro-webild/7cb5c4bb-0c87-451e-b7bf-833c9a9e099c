"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Sparkles, Star, Utensils, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Amenities",
          id: "amenities",
        },
        {
          name: "Rooms",
          id: "rooms",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Elysium Hotel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Unwind in Pure Luxury"
      description="Experience unparalleled hospitality in the heart of the city. Our rooms blend timeless elegance with modern comfort."
      tag="Five-Star Experience"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abandoned-sanitarium_181624-18703.jpg",
          imageAlt: "Luxurious Hotel Lobby",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2276.jpg",
          imageAlt: "Comfortable Suite Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/royal-dining-room-with-wooden-furniture-chandeliers_114579-2222.jpg",
          imageAlt: "Royal dining room with wooden furniture and chandeliers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-meeting-dining-room-table-multiple-chairs_114579-2067.jpg",
          imageAlt: "Luxury meeting and dining room table and multiple chairs",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-sauna-view-organic-wooden-columns-resort-style-wellness_169016-68883.jpg",
          imageAlt: "Panoramic sauna view organic wooden columns resort style wellness",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Over 5,000 satisfied guests"
      tagIcon={Star}
    />
  </div>

  <div id="amenities" data-section="amenities">
      <AboutMetric
      useInvertedBackground={false}
      title="Hotel Amenities"
      metrics={[
        {
          icon: Waves,
          label: "Pool",
          value: "Infinity Pool",
        },
        {
          icon: Utensils,
          label: "Dining",
          value: "Michelin Star",
        },
        {
          icon: Sparkles,
          label: "Spa",
          value: "Full Service",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Your Comfort is Our Priority"
      description="From personalized concierge service to premium bedding, we ensure your stay is unforgettable."
      accordionItems={[
        {
          id: "f1",
          title: "24/7 Concierge",
          content: "Our team is available round-the-clock for your needs.",
        },
        {
          id: "f2",
          title: "Premium Bedding",
          content: "Sleep soundly with our hand-picked Egyptian cotton sheets.",
        },
        {
          id: "f3",
          title: "Wellness Center",
          content: "Modern equipment for all your fitness requirements.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/lobby-condominium-building_1262-3037.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "r1",
          name: "Deluxe Room",
          price: "$290/night",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2065.jpg",
        },
        {
          id: "r2",
          name: "Executive Suite",
          price: "$450/night",
          imageSrc: "http://img.b2bpic.net/free-photo/white-pillow-bed_74190-3601.jpg",
        },
        {
          id: "r3",
          name: "Royal Penthouse",
          price: "$900/night",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151119013.jpg",
        },
        {
          id: "r4",
          name: "Family Suite",
          price: "$550/night",
          imageSrc: "http://img.b2bpic.net/free-photo/father-mother-daughter-lie-bed_8353-5125.jpg",
        },
        {
          id: "r5",
          name: "Garden View",
          price: "$350/night",
          imageSrc: "http://img.b2bpic.net/free-photo/open-laptop-bed_171337-12759.jpg",
        },
        {
          id: "r6",
          name: "Junior Suite",
          price: "$300/night",
          imageSrc: "http://img.b2bpic.net/free-photo/white-comfortable-pillow-decoration-interior-bedroom_74190-11122.jpg",
        },
      ]}
      title="Our Suite Collection"
      description="Find your perfect space, whether for business or leisure."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Amazing Stay",
          quote: "The service was impeccable throughout our visit.",
          name: "Alice M.",
          role: "Travel Blogger",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9621.jpg",
        },
        {
          id: "t2",
          title: "Luxury Reimagined",
          quote: "Best stay I have had in years. Highly recommended.",
          name: "John D.",
          role: "Corporate Executive",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg",
        },
        {
          id: "t3",
          title: "Fantastic Views",
          quote: "The room design is modern and very inviting.",
          name: "Sarah P.",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg",
        },
        {
          id: "t4",
          title: "Highly Relaxing",
          quote: "Loved the spa and concierge team. Pure bliss.",
          name: "Robert B.",
          role: "Teacher",
          imageSrc: "http://img.b2bpic.net/free-photo/partners-sitting-table-working-cafe_1157-28477.jpg",
        },
        {
          id: "t5",
          title: "Wonderful Experience",
          quote: "Five-star service from start to finish.",
          name: "Emily R.",
          role: "Artist",
          imageSrc: "http://img.b2bpic.net/free-photo/spectacular-smiling-girl-expressing-positive-emotions-while-posing-home-indoor-portrait-magnificent-longhaired-woman-elegant-holiday-outfit_291650-2396.jpg",
        },
      ]}
      title="Guest Testimonials"
      description="See why travelers choose our hotel for their stays."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          name: "Weekend Escape",
          price: "$799",
          features: [
            "2 Nights",
            "Spa Access",
            "Breakfast Included",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "p2",
          name: "Romantic Getaway",
          price: "$1200",
          features: [
            "3 Nights",
            "Champagne",
            "Dinner for Two",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "p3",
          name: "Business Pro",
          price: "$950",
          features: [
            "4 Nights",
            "Meeting Room Access",
            "Laundry Service",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Exclusive Packages"
      description="Choose one of our tailored packages for your next stay."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Is breakfast included?",
          content: "Yes, breakfast is complimentary with all room rates.",
        },
        {
          id: "q2",
          title: "Do you offer parking?",
          content: "Valet parking is available for all guests 24/7.",
        },
        {
          id: "q3",
          title: "Are pets allowed?",
          content: "Yes, we are a pet-friendly establishment.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to our common guest inquiries."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Book Your Stay Today"
      description="Reach out to our reservations desk for personalized assistance."
      buttons={[
        {
          text: "Contact Us Now",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Amenities",
              href: "#amenities",
            },
          ],
        },
        {
          title: "Policies",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Elysium Hotel"
      copyrightText="© 2025 Elysium Hotel. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
