import { use, useState } from 'react';
import { toast } from 'react-toastify';
import type { ITech } from '../../Types/techType';
import TechCard from './TechCard';
import StackSidebar from './StackSidebar';

interface TechProps {
  techPromise: Promise<ITech[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  // catching in empty array
  const [selectedStack, setSelectedStack] = useState<ITech[]>([]); 

  // Adding technology to stack (with success or duplicate warning)
  const handleAddToStack = (tech: ITech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  // Removing single technology by id and name
  const handleRemoveTech = (id: string, name: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack.`);
  };

  // Removing all technologies
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all technologies from stack.");
  };

  return (
    <section className="py-12 px-4 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-base-content/70 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Grid of Technology Cards (Takes 3 columns on large screens) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isSelected = selectedStack.some((item) => item.id === tech.id);
            return (
              <TechCard
                key={tech.id}
                tech={tech}
                isSelected={isSelected}
                onAddToStack={handleAddToStack}
              />
            );
          })}
        </div>

        {/* Right Side: Your Stack Sidebar (Takes 1 column on large screens) */}
        <div className="lg:col-span-1">
          <StackSidebar
            selectedStack={selectedStack}
            onRemoveTech={handleRemoveTech}
            onRemoveAll={handleRemoveAll}
          />
        </div>

      </div>
    </section>
  );
};

export default Tech;