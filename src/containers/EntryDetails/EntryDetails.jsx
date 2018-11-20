import React from 'react';

import EntryTable from '../../components/EntryTable';

export default function EntryDetails() {
  return (
    <div className="EntryDetails">
      <EntryTable
        fastestLap={{ lapNumber: 6, lapTime: 91, driverName: 'Pipo Derani' }}
        averageLapTime={95.6}
      />
    </div>
  );
}
