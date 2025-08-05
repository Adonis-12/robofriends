# 🤖 Robofriends

This is a simple React-based web app that displays a list of robot friends , created by users around the world. You can search through the robots using the search box provided.

> 🛠️ This was my very first React project, built as part of my learning journey — so don’t judge, just enjoy!

---

## 🚀 Features
- Create a robot profile with name of your choice
- Displays a list of robot profiles
- Live search functionality to filter robots by name
- Clean and responsive UI using basic CSS
- Built using functional components and props

---

## 🧰 Tech Stack

- **React JS** (Create React App)
- **JavaScript**
- **HTML & CSS**
- **[RoboHash API](https://robohash.org/)** for generating robot images

---

## 🖥️ Demo

 Checkout <a href='https://robofriends-self.vercel.app/'>RoboFriends<a> or you can clone and run locally as below.

---

## 🧑‍💻 Getting Started

### 📦 Installation

```bash
git clone https://github.com/Adonis-12/robofriends.git
cd robofriends
npm install
npm start

```
# 🤖 Contribute to RoboFriends

Want to see yourself as a robot? Awesome! This project is open to beginner-friendly contributions. All you have to do is add your robot profile.

---

## 🧑‍💻 What You'll Do

You'll fork this repo, clone it, create a new branch, add your name to the robot list, and make a pull request. Let’s go!

---

## 🚀 Steps to Contribute

1. **Fork** this repository  
   Click the **Fork** button in the top right of this repo on GitHub.

2. **Clone** your fork  
   Open your terminal and run:

   ```bash
   git clone https://github.com/<your-username>/robofriends
   cd robofriends
   ```

3. Create a new branch <br><br>
   Give it a meaningful name like "add-my-robot":

    ```bash
    git checkout -b add-my-robot
    ```

4. Add your robot profile<br><br>
   Open ./src/robots/robots.js and scroll to the bottom.
   <br><br>
   Add your info like this:
    ```bash
      {
       id: X, // Replace X with the next available number
       first_name: "YourFirstName",
       last_name: "YourLastName",
       email: "your.email@example.com"
      }
    ```
    Important: Keep the comma , between objects if you're not the last one! <br>
    Note: Make sure your id is unique and not already used by someone else in the robots.js file.
   <br>
   <br>
5. Save your changes and commit:
    ```bash
    git add .
    git commit -m "Added myself as a robot 🤖"
    ```
6. Push your branch to your forked repo:
    ```bash
    git push origin add-my-robot
    ```
7. Create a Pull Request (PR)<br>
   Go back to the original repo and click “Compare & pull request” to submit your PR.

---

  ## 📝 Contribution Checklist

- [ ] Forked the repository
- [ ] Cloned the forked repository
- [ ] Created a new branch (e.g. `add-my-robot`)
- [ ] Added my robot profile to `./src/robots/robots.js`
- [ ] Made sure my `id` is unique and not already used
- [ ] Didn't remove or modify others' entries
- [ ] Committed the changes with a clear message
- [ ] Pushed the branch to my GitHub fork
- [ ] Opened a pull request to the main repository
   <br>
   <br>
   <br>
 We’ll review and merge your PR soon 🎉
  <br><br>
 Welcome to the RoboFriends Army! 🤖💚
