# Candy Crush Level Editor

Welcome to the **Candy Crush Level Editor**! This project allows you to create and customize levels for the popular Candy Crush game. The editor provides an intuitive drag-and-drop interface, enabling you to design levels with various candies, obstacles, and boosters. Works with Candy Crush Web Player, too!

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Intuitive drag-and-drop interface**: Easily design levels by dragging and dropping candies, obstacles, and boosters.
- **Support for various Candy Crush game mechanics**: Includes features like special candies, blockers, and candy cannons.
- **Customizable level parameters**: Adjust the number of moves, score targets, and other level settings.
- **Real-time preview**: See how your level will look and behave in the game as you design it.
- **Export and import**: Save your levels as JSON files and reload them for further editing.

## Technologies Used
This project is built using the following technologies:
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Handles the interactive functionality of the editor.
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**: Structures the web interface.
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Styles the editor for a user-friendly experience.
- **[Python](https://www.python.org/)**: Powers the backend for saving and loading levels.

## Getting Started
Candy Crush Level Editor relies on Adobe Flash Player, which was discontinued in December 2020. However, you can still download it from archived sources.

Unlike it's said in [this](#candy-crush-level-editor) section, both the Editor and the Web Player relies on themselves to work together. So you will need to **fork both repositories** to make it work. Both work with GitHub Deployment, so you can host them on GitHub Pages.

### Prerequisites
To run the Candy Crush Level Editor, you will need to manually download and set up the following:

- **[WaterFox Classic](https://www.waterfox.net/)**: A fork of Firefox that supports Flash Player.
- **[Flash Player](https://archive.org/details/flashplayerarchive)**: The plugin required to run Flash content in the browser.

#### Steps to Set Up Prerequisites:
1. Download both WaterFox Classic and Flash Player from [this link](https://drive.google.com/drive/folders/17Lak8T5QbOa9KDT1qW6n3RSEVG3P5F_O?usp=sharing).
2. Install WaterFox Classic by running the installer.
3. Open the Flash Player installer. When prompted for update preferences, select **"Never check for updates"** to prevent Flash from being disabled.
4. Launch WaterFox Classic and choose **"Don't import anything"** unless you plan to use it as your primary browser.
5. If the browser prompts you to allow Flash, click **"Allow and remember"** to enable it for future use. Otherwise, you will be prompted automatically every time you try using the Editor.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CandyCrushLevelEditor.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CandyCrushLevelEditor
   ```
3. Install any required dependencies (if applicable).

### Running the Application
WARNING: This application is not compatible with modern browsers due to the discontinuation of Flash Player. You must use WaterFox Classic with Flash Player installed. Read this [section](#getting-started) for more information.

1. Go to your repository on GitHub.
2. Navigate to the **Settings** tab.
3. Scroll down to the **Pages** section.
4. Under **Source**, select the branch you want to deploy (e.g., `main`) and click **Save**.
5. GitHub will generate a URL for your deployed page. Use this URL to access the application in your browser.

## Contributing
Contributions are welcome! Here's how you can contribute:

1. **Fork the repository**: Click the "Fork" button at the top of this page.
2. **Clone your fork**: 
   ```bash
   git clone https://github.com/your-username/CandyCrushLevelEditor.git
   ```
3. **Create a new branch**: 
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes**: Add new features or fix bugs.
5. **Test your changes**: Ensure everything works as expected.
6. **Submit a pull request**: Provide a detailed explanation of your changes.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or support:
- Create an issue in this repository.
- Contact the maintainer via [GitHub](https://github.com/tp-duolingo) or join the [Discord server](https://discord.gg/2Zq9tszNBn).
