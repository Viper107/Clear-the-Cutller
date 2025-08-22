# File Organizer using Node.js

This project is a simple **file organizer** built with Node.js.  
It reads all files inside a given folder and automatically sorts them into subfolders based on their file extensions.  

For example:  
- `.txt` files go into a `txt/` folder  
- `.js` files go into a `js/` folder  

---

## 🚀 Features
- Automatically detects file extensions
- Creates new folders if they don’t exist
- Moves files to their respective extension-based folders
- Handles files with no extension

---

## 📂 Project Structure
project/
├─ content/ # Main folder containing unsorted files
├─ index.js # Main Node.js script
└─ README.md
