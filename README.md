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

For Windows users, install by downloading the [Windows installer](https://nodejs.org/dist/v12.16.3/node-v12.16.3-x64.msi).

For Mac users:

1. Install [Homebrew](https://brew.sh/):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
   ```
2. Install [Node]() using Homebrew:
   ```bash
   brew install node
   ```

# Task

In this task, you'll write a script that has variables and uses `console.log` to print a little story.

## Steps

1. Open this folder in Visual Studio Code.
2. In `story.js`, define three variables that contain a `name`, an `age`, and a `hobby`.
3. Using these variables, print the following story:

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

1. Open a new terminal in VS Code.
2. To make sure you're in the right folder, run the command `ls`, you should see the file `story.js`.
3. Run the command `git add .`
4. Run `git commit -m "your message here"`.
5. Push to GitHub: `git push`.
