import type { ITech } from '../../Types/techType';

interface StackSidebarProps {
  selectedStack: ITech[];
  onRemoveTech: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ selectedStack, onRemoveTech, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm p-6 sticky top-6 rounded-2xl">
      <h3 className="text-lg font-bold text-neutral">Your Stack</h3>
      <p className="text-xs text-base-content/60 mb-4">
        {selectedStack.length === 0 
          ? 'No technologies selected yet.' 
          : `${selectedStack.length} Technology Selected`}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border-2 border-dashed border-base-300 rounded-xl p-8 text-center text-xs text-base-content/40">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {selectedStack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-3 border border-base-200 rounded-xl bg-base-50">
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-neutral">{tech.name}</h4>
                  <span className="text-[10px] text-base-content/60">{tech.category}</span>
                </div>
              </div>
              <button 
                onClick={() => onRemoveTech(tech.id)}
                className="text-base-content/40 hover:text-error text-sm font-bold p-1 transition-colors"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}

          <button 
            onClick={onRemoveAll}
            className="w-full btn btn-outline btn-error btn-sm mt-4"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;