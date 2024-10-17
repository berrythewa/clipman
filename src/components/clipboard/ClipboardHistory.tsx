import { Component, For } from 'solid-js';
import { useClipboard } from '../../hooks/useClipboard';
import ClipboardItem from './ClipboardItem';

const ClipboardHistory: Component = () => {
  const { history, initializeClipboardMonitoring } = useClipboard();

  initializeClipboardMonitoring();

  return (
    <div>
      <h2 class="text-xl font-semibold mb-2">Clipboard History</h2>
      <ul class="space-y-2">
        <For each={history()}>
          {(item, index) => <ClipboardItem content={item} />}
        </For>
      </ul>
    </div>
  );
};

export default ClipboardHistory;