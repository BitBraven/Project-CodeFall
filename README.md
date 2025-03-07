# Project-CodeFall
A visually stunning code rain effect using HTML5 canvas, to be used in Wallpaper Engine and Lively Wallpaper.

# Codefall Matrix Animation

Welcome to the **Codefall Matrix Animation** project! This is a customizable Matrix-style animation with a header text typing effect, designed for use in **Wallpaper Engine** or **Lively Wallpaper**. Before using this project, please read the **LICENSE AGREEMENT** file to understand the terms and conditions.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Customizing the Header Text](#customizing-the-header-text)
3. [Adjusting Animation Speed](#adjusting-animation-speed)
4. [Changing the Startup Wait Time](#changing-the-startup-wait-time)
5. [Customizing Colors](#customizing-colors)
6. [Usage with Wallpaper Engine or Lively Wallpaper](#usage-with-wallpaper-engine-or-lively-wallpaper)

---

## Getting Started
1. Clone or download this repository.
2. Open the `script.js` file in a text editor to customize the animation.
3. Ensure you have **Wallpaper Engine** or **Lively Wallpaper** installed to use this project as a live wallpaper.
4. Replace `Wallpaper.png` with any Wallpaper image you want to use as your background.
---

## Customizing the Header Text
### Toggle the Header Text
The header text can be toggled on or off by editing the `headerConfig.enabled` variable:
- Set `headerConfig.enabled = true;` to enable the header text.
- Set `headerConfig.enabled = false;` to disable the header text.

### Change the Header Text
To set your own header text, edit the `headerText` variable:
```javascript
const headerText = "YOUR HEADER";
```
Replace `"YOUR HEADER"` with your desired text.

---

## Adjusting Animation Speed
### Matrix Animation Speed
The speed of the Matrix animation is controlled by the `charFadeDuration` variable in the `root` object:
```javascript
const root = {
    charFadeDuration: 40, // Lower values make the animation faster
};
```
- Decrease the value to make the animation faster.
- Increase the value to make the animation slower.

### Header Typing Speed
The speed at which the header text is typed is controlled by the `setTimeout` function in the `typeHeader` function:
```javascript
setTimeout(typeHeader, 200); // Time is in milliseconds (ms)
```
- Lower the value (e.g., `100`) to type faster.
- Increase the value (e.g., `300`) to type slower.

---

## Changing the Startup Wait Time
The script includes a startup wait time to allow Windows to fully boot before the animation begins. This is controlled by the `setTimeout` function at the end of the script:
```javascript
setTimeout(() => {
    // Animation code
}, 2000); // Time is in milliseconds (ms)
```
- By default, the wait time is `2000ms` (2 seconds).
- Adjust this value depending on how quickly you want the script to start after booting.

---

## Customizing Colors
The default color of the animation is red, but you can customize it by editing the `root.colour` object:
```javascript
const root = {
    colour: { r: 255, g: 0, b: 0 }, // Red by default
};
```
- Change the `r`, `g`, and `b` values to set your desired color (RGB format).
- Example: `{ r: 0, g: 255, b: 0 }` for green.

---

## Usage with Wallpaper Engine or Lively Wallpaper
This project is designed to be used as a live wallpaper in **Wallpaper Engine** or **Lively Wallpaper**:
1. **Wallpaper Engine** (Recommended):
   - Open Wallpaper Engine and select **Create Wallpaper**.
   - Choose **Web Wallpaper** and upload the `index.html` file.
   - Wallpaper Engine is highly optimized and provides better performance.

2. **Lively Wallpaper**:
   - Open Lively Wallpaper and drag the `index.html` file into the application.
   - Lively Wallpaper is a free alternative but may not be as optimized as Wallpaper Engine.

---

## License Reminder
Before using this project, please read the **LICENSE AGREEMENT** file included in this repository. The project is provided "as is," and all rights are reserved as specified in the license.

---

Enjoy customizing and using the **Codefall Matrix Animation**! If you have any questions or issues, feel free to open an issue on GitHub.
