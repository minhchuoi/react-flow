import React from 'react';
import { useDiagramStyle } from '../../context/DiagramStyleContext';
 
export default function UtilityBar() {
  const [style, setStyle] = useDiagramStyle()
  return (
    <aside className='flex flex-col gap-y-4'>
      <h2>Utility</h2>
      <div className='flex gap-x-2 items-center'>
      <label>Edge color:</label>
      <input type="color" value={style.edgeColor} onChange={(e) => setStyle(c => ({...c, edgeColor: e.target.value}))} />
      </div>
      <div className='flex gap-x-2 items-center'>
      <label>Node text color:</label>
      <input type="color" value={style.nodeTextColor} onChange={(e) => setStyle(c => ({...c, nodeTextColor: e.target.value}))} />
      </div>
    </aside>
  );
};