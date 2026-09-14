import type { ITech } from '../../Types/techType';

interface TechCardProps {
  tech: ITech;
  isSelected: boolean;
  onAddToStack: (tech: ITech) => void;
}

const TechCard = ({ tech, isSelected, onAddToStack }: TechCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm p-6 flex flex-col justify-between rounded-2xl">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          {tech.badge && (
            <span className="badge badge-sm badge-info badge-outline font-medium">
              {tech.badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-neutral">{tech.name}</h3>
        <p className="text-base-content/70 text-sm mt-2 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="badge badge-ghost">{tech.category}</span>
          <span className="badge badge-ghost">{tech.difficulty}</span>
          <span className="badge badge-ghost text-amber-500 font-bold">★ {tech.rating}</span>
        </div>
        
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isSelected}
          className={`w-full btn btn-sm ${
            isSelected 
              ? 'btn-disabled opacity-50' 
              : 'bg-neutral text-neutral-content hover:bg-neutral/90'
          }`}
        >
          {isSelected ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;