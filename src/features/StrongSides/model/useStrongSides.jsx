import { skillToProfessions } from "@/features/StrongSides/model/StrongSideData";

export const useStrongSides = (results) => {
  if (!results || Object.keys(results).length === 0) {
    return { topSkills: [], recommendedProfessions: [] }; // Возвращаем пустые массивы
  }

  const sortedSkills = Object.entries(results)
    .map(([skill, score]) => ({ skill, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); 

  const recommendedProfessions = [];
  sortedSkills.forEach(({ skill }) => {
    if (skillToProfessions[skill]) {
      skillToProfessions[skill].forEach((profession) => {
        if (!recommendedProfessions.includes(profession)) {
          recommendedProfessions.push(profession);
        }
      });
    }
  });

  return {
    topSkills: sortedSkills,
    recommendedProfessions
  };
};

