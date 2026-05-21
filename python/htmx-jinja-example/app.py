from flask import Flask, render_template, send_from_directory, request
import os

app = Flask(__name__)

tasks = [
    {"id": 1, "title": "Setup project", "done": True},
    {"id": 2, "title": "Add components", "done": False},
    {"id": 3, "title": "Write tests", "done": False},
]


@app.route("/node_modules/<path:filename>")
def node_modules(filename):
    return send_from_directory(os.path.join(app.root_path, "node_modules"), filename)


@app.route("/")
def index():
    return render_template("index.html", tasks=tasks, user="Developer")


@app.route("/toggle/<int:task_id>", methods=["POST"])
def toggle_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = not task["done"]
    return render_template("partials/task_list.html", tasks=tasks)


@app.route("/add-task", methods=["POST"])
def add_task():
    title = request.form.get("title", "").strip()
    if title:
        tasks.append({"id": len(tasks) + 1, "title": title, "done": False})
    return render_template("partials/task_list.html", tasks=tasks)


if __name__ == "__main__":
    app.run(debug=True)
