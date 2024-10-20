#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod clipboard;

use clipboard::{ClipboardState, start_clipboard_monitoring, stop_clipboard_monitoring};

fn main() {
    tauri::Builder::default()
        .manage(ClipboardState::default())
        .invoke_handler(tauri::generate_handler![
            start_clipboard_monitoring,
            stop_clipboard_monitoring
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}