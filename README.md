# Setup

## Install Visual Studio Code

[Click here to download](https://code.visualstudio.com/download)

## Install Prettier in Visual Studio Code

1. Open VS Code
2. Click the settings icon in the bottom left corner, and open the `Command Palette...`.
3. Search for "Prettier", then click "Install".
4. Once it's done installing, restart VS Code.
5. Click the settings icon in the bottom left corner again, and open the `Settings`.
6. Search in settings for `Format On Save`, and **make sure the box is checked**.

## Install [node](https://nodejs.org/en/download/)

- For Mac users, install node using the [macOS installer](https://nodejs.org/dist/v12.16.3/node-v12.16.3.pkg).
- For Windows users, install by downloading the [Windows installer](https://nodejs.org/dist/v12.16.3/node-v12.16.3-x64.msi).

# Task

In this task, you'll write a script that has variables and uses `console.log` to print a little story.

## Steps

2. Open this folder in Visual Studio Code.
3. In `story.js`, define three variables that contain a `name`, an `age`, and a `hobby`.
4. Using these variables, print the following story:

   ```
   Mr./Mrs. NAME, in 33 years, you will be AGE_PLUS_33 years old. By then you'll have decades of HOBBY practice!
   ```

Example, if the variables are the following:

- `name`: Mshary
- `age`: 25
- `hobby`: Meditation

The story goes:

```
Mr./Mrs. Mshary, in 33 years, you will be 58 years old. By then you'll have decades of Meditation practice!
```

# Submission

To submit your work, simply push your code to GitHub.

## Steps

After finishing the task and verifying your work, follow these steps to push your code to GitHub:

1. Navigate to project root (where `story.js` is).
2. Run the command `git add .`
3. Run `git commit -m "your message here"`.
4. Push to GitHub: `git push`.
