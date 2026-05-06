# UIX Design Library — Publishing Instructions

To enable the "Sync to Figma" feature, follow these steps:

### 1. Update the Frontend
- I have already added a `syncLibraryToCloud` function to `app.tsx`.
- I have added a "Sync All" button to the header.
- **Action**: Ensure the `fetch` URL in `syncLibraryToCloud` matches your production API path.

### 2. Set up the Backend (cPanel)
- Go to your cPanel File Manager.
- Create a directory: `public_html/api`.
- Upload the `backend-php/index.php` file to that directory.
- Ensure the directory has write permissions (755 or 777) so it can create `library_data.json`.

### 3. Usage
1. Open your live library site: `https://uix.sigmastudioo.com`.
2. Click **"Sync All"** in the header.
   - *Note: This will collect all currently rendered components. For a full sync, browse through the main categories first to ensure all payloads are generated.*
3. Open the Figma Plugin.
4. Toggle to **Cloud** mode.
5. Click **"Import All Library"**.

The plugin will now fetch the live data from your SQL/JSON backend!
