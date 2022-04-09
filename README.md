# doThis readme
[doThis](https://dothistasktracker.netlify.app/) is a task list & organisation website built using React Hooks and node.js. With full CRUD functionality, it allows users to set themselves tasks, organise them into projects and delete or edit their data. Data persistence is handled through localStorage. While this began as a simple todo list, it evolved into something much more in-depth & ambitious as I learned more about React and Hooks.

![Site image](https://raw.githubusercontent.com/Nootuff/Nootuff.github.io/master/imgs/doThis-imgs/doThis-img-1.png)

## Features
- Todos can be created with optional notes or deadlines.
- Todos are saved to localStorage.
- The last 10 deleted todos are saved in a separate project directory & can be viewed, restored or deleted permanently at any time. If a restored todo’s parent directory has been deleted, it will be restored to the home directory.
- Displayed deadline date will turn red if site detects deadline has passed.
- Responsive, mobile-first design created using [Bootstrap 5](https://getbootstrap.com/) and [React-bootstrap](https://react-bootstrap.github.io/).

## Users are able to:
- Create new todo tasks, adding a title, notes, assigning a priority level and an optional deadline date.
- Delete or edit all todo details with an easy to use, attractive edit form.
- Create project directories with extra notes to store related tasks. Project names & notes can be edited, entire projects & all associated todos can be deleted.
- Mark tasks as complete & delete all currently completed tasks in the current project with the press of a button.
- Restore recently deleted todos or delete them for good.
