import { usePortfolioViewModel } from './viewmodels/usePortfolioViewModel';
import Header from './views/components/Header';
import Hero from './views/components/Hero';
import Experience from './views/components/Experience';
import Education from './views/components/Education';
import Skills from './views/components/Skills';
import Footer from './views/components/Footer';

function App() {
  const { profile, experiences, education, skills, isLoading } = usePortfolioViewModel();

  if (isLoading || !profile) {
    return (
      <div className="min-h-screen bg-[var(--color-base)] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-muted)] font-body">
      <Header profile={profile} />
      
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        <Hero profile={profile} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Education education={education} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}

export default App;
