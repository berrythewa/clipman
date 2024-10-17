import { Component } from 'solid-js';
import ClipboardHistory from './components/clipboard/ClipboardHistory';

const App: Component = () => {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Clipboard Manager</h1>
      <ClipboardHistory />
    </div>
  );
};

export default App;