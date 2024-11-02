import React, { useEffect, useState } from 'react';
import { storageService } from '../services/storageService';
import { Lab } from '../types';

const LabList: React.FC = () => {
  const [labs, setLabs] = useState<Lab[]>([]);

  useEffect(() => {
    const fetchLabs = () => {
      const labsData = storageService.getLabs();
      setLabs(labsData);
    };

    fetchLabs();
  }, []);

  return (
    <div>
      <h2>Labs</h2>
      <ul>
        {labs.map((lab) => (
          <li key={lab.id}>
            <h3>{lab.title}</h3>
            <p>{lab.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabList; 