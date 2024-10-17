import React from 'react';
import ClipboardHistory from '../components/clipboard/ClipboardHistory';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Clipboard Manager</h1>
      <ClipboardHistory />
    </div>
  );
};

export default Home;