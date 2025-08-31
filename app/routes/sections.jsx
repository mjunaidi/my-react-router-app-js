import Hero from '../sections/hero';
import FeatureProduct from '../sections/feature-product';
import Feature from '../sections/feature';
import CTA from '../sections/cta'
import BentoGrids from '../sections/bento-grids';
import Pricing from '../sections/pricing';
import HeaderSection from '../sections/header-section';
import NewsletterSection from '../sections/newsletter-section';
import Stats from '../sections/stats';
import Testimonial from '../sections/testimonial';
import BlogSections from '../sections/blog-sections';
import ContactSection from '../sections/contact-section';
import TeamSections from '../sections/team-sections';
import ContentSection from '../sections/content-section';
import LogoClouds from '../sections/logo-clouds';
//import FAQs from '../marketing/faqs';
//import Footer from '../marketing/footer';

export default function Marketing() {
  return (
    <>
      <Hero />
      <FeatureProduct />
      <Feature />
      <CTA />
      <BentoGrids />
      <Pricing />
      <HeaderSection />
      <NewsletterSection />
      <Stats />
      <Testimonial />
      <BlogSections />
      <ContactSection />
      <TeamSections />
      <ContentSection />
      <LogoClouds />
      {/*<FAQs />*/}
      {/*<Footer />*/}
    </>
  );
}