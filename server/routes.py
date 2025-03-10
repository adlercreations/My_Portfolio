from flask import Blueprint, jsonify, request
import json
from models import Project
import os

api = Blueprint('api', __name__)

# Verify the absolute path is what you expect
DATA_FILE = os.path.abspath('../client/public/api/projects.json')
print("Using DATA_FILE:", DATA_FILE)

def load_projects():
    with open(DATA_FILE) as f:
        project_data = json.load(f)
        print("Loaded project data:", project_data)  # Debug print
        return [Project.from_dict(p) for p in project_data]
    
def save_projects(projects):
    with open(DATA_FILE, 'w') as f:
        json.dump([vars(p) for p in projects], f, indent=4)

projects = load_projects()

@api.route('/projects', methods=['GET', 'POST'])
def projects_handler():
    if request.method == 'GET':
        return jsonify([vars(project) for project in projects])
    
    if request.method == 'POST':
        data = request.get_json()
        new_project = Project.from_dict(data)
        projects.append(new_project)
        save_projects(projects)
        return jsonify(vars(new_project)), 201


@api.route('/projects/<int:project_id>', methods=['GET'])
def get_project_by_id(project_id):
    project = next((p for p in projects if p.id == project_id), None)
    if project is None:
        return jsonify({"error": "Project not found"}), 404
    return jsonify(vars(project))

@api.route('/projects')
def get_projects():
    projects = load_projects()
    # Debug print the projects that are returned
    print("Loaded projects (Flask):", [p.__dict__ for p in projects])
    return jsonify([p.__dict__ for p in projects])