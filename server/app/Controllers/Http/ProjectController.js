'use strict';

const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { titel } = request.all();
    const project = new Project();
    project.fill({
      titel,
    });
    await user.projects().save(project);
    return project;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationService.verifyPromission(project, user);
    await project.delete();
    return project;
  }
}

module.exports = ProjectController;
