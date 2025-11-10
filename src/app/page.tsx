import About from '@/components/home/about-section';
import AnimatedHomeText from '@/components/home/animated-text-section';
import HomeArticles from '@/components/home/articles-section';
import HeroSection from '@/components/home/hero-section';
import MainArticle from '@/components/home/main-article-section';
import Schedule from '@/components/home/schedule-section';
import StampsSection from '@/components/home/stamps-section';

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <StampsSection />
      <AnimatedHomeText />
      <Schedule />
      <About />
      <MainArticle />
      <HomeArticles />
    </main>
  );
}
