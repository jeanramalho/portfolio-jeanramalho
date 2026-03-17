import { useState, useEffect } from 'react';
import { 
  mockProfile, 
  mockExperiences, 
  mockEducation, 
  mockSkills,
  Profile,
  Experience,
  Education,
  SkillCategory
} from '../models/cv_data';

export interface PortfolioViewModel {
  profile: Profile | null;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  isLoading: boolean;
}

export function usePortfolioViewModel(): PortfolioViewModel {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data fetching delay for architecture
    const loadData = () => {
      setProfile(mockProfile);
      setExperiences(mockExperiences);
      setEducation(mockEducation);
      setSkills(mockSkills);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return {
    profile,
    experiences,
    education,
    skills,
    isLoading
  };
}
