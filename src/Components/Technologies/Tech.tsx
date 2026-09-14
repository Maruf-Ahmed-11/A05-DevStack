import { use } from 'react';
import type { ITech } from '../../Types/techType';


interface TechProps {
    techPromise : Promise<ITech[]>
}

const Tech = ({ techPromise } : TechProps) => {
    console.log(techPromise);
    const Technologies = use(techPromise);
    console.log(Technologies, "technologies")
    return (
        <div>

        </div>
    );
};

export default Tech;