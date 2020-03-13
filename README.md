# CodeYourFuture Student Class Exercise - Git/GitHub

Welcome to this exercise to help you practice the use of Git & GitHub

This exercise is based around a single HTML page that makes use of separate CSS, JavaScript and image assets. The files provided are stored in a typical directory structure for a page like this, and are linked using relative paths in the `<head></head>` of the HTML file for the CSS and JavaScript files, and in the `<body></body>` for the images where used.

## Setup

### Step 1. Fork the repository

First, [fork](https://help.github.com/articles/fork-a-repo) this repository to your own GitHub account by clicking the fork button.

- [https://github.com/CodeYourFuture/git_github_exercise](https://github.com/CodeYourFuture/git_github_exercise)

![fork-repo](assets/fork.png)

### Step 2. Clone your fork

Next, clone your fork from your GitHub repo to your local machine using 

```bash
  git clone [URL to your repo]
```

![clone-repo](assets/clone.png)

### Step 3. Create your directory

In the root folder, create a folder with your github nickname.

```bash
.
├── README.md
└── github-username-directory
```

## Submitting work

### Step 1. Create a week/day folder

When you are going to add a new homework, first create a directory with the information about the week and the day like with the format `w01d02` (for week one, day two).

Your folder structure should look something like this:

```
.
├── README.md
└── github-username-directory
    └── w01d02
```

### Step 2. Push to your fork

At the end of each day (or first thing each morning), ensure all of your homework is committed to git and pushed to your github fork of the student work repository.

### Step 3. Submit a pull request

Then create a [pull request](https://help.github.com/articles/using-pull-requests) from your fork. This will automatically include all the commits you have made to the repository.

![pull-request](assets/pull_request.png)

### Step 3. Add a title and comment

Add the title of exercise to the pull request, e.g. "Git/GitHub Exercise".

Then add a comment to the pull request. Your comment should follow this format:

```
* Comfortability [0 to 5]
* Completeness [0 to 5]
* What was a win?
* What was a challenge?
* Any other comments
```

The volunteer team will then review your pull request, and use the main repository as the source to monitor your work.

If you have any problems with submitting assignments, ask a volunteer to help you.
