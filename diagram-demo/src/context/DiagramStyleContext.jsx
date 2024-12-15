import React, { createContext, useContext, useState } from 'react';
 
const DiagramStyleContext = createContext([null, (_) => {}]);
 
export const DiagramStyleProvider = ({ children }) => {
  const [style, setStyle] = useState({
    edgeColor: '#000',
    nodeTextColor: '#000'
  });
 
  return (
    <DiagramStyleContext.Provider value={[style, setStyle]}>
      {children}
    </DiagramStyleContext.Provider>
  );
}
 
export default DiagramStyleContext;
 
export const useDiagramStyle = () => {
  return useContext(DiagramStyleContext);
}