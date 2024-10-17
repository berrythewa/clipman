import { createSignal, onCleanup } from 'solid-js';
import { listen, invoke } from '@tauri-apps/api';
// import { invoke } from '@tauri-apps/api';

export function useClipboard() {
  const [history, setHistory] = createSignal<string[]>([]);

  const initializeClipboardMonitoring = async () => {
    try {
      await invoke('start_clipboard_monitoring');
      const unlistenClipboardChange = await listen('clipboard-change', (event: any) => {
        setHistory(prev => [event.payload as string, ...prev.slice(0, 9)]);
      });

      onCleanup(() => {
        unlistenClipboardChange();
        invoke('stop_clipboard_monitoring');
      });
    } catch (error) {
      console.error('Failed to initialize clipboard monitoring:', error);
    }
  };

  return {
    history,
    initializeClipboardMonitoring
  };
}