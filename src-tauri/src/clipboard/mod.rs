use std::sync::{Arc, Mutex};
use std::time::Duration;
// use tauri::Manager;
use arboard::Clipboard;
use tauri::Emitter;

pub struct ClipboardState(pub Arc<Mutex<String>>);

impl Default for ClipboardState {
    fn default() -> Self {
        ClipboardState(Arc::new(Mutex::new(String::new())))
    }
}

#[tauri::command]
pub async fn start_clipboard_monitoring(app: tauri::AppHandle, state: tauri::State<'_, ClipboardState>) -> Result<(), String> {
    let state_clone = Arc::clone(&state.0);
    std::thread::spawn(move || {
        let mut clipboard = Clipboard::new().expect("Failed to initialize clipboard");
        loop {
            if let Ok(content) = clipboard.get_text() {
                let mut last_content = state_clone.lock().unwrap();
                if content != *last_content {
                    *last_content = content.clone();
      
                    // app.emit("clipboard-change", content);
                    let _ = app.emit("clipboard-change", content);
                }
            }
            std::thread::sleep(Duration::from_millis(500));
        }
    });
    Ok(())
}

#[tauri::command]
pub async fn stop_clipboard_monitoring() -> Result<(), String> {
    // Implement logic to stop the monitoring thread
    Ok(())
}