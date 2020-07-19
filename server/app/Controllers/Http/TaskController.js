'use strict';

const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.tasks().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { description } = request.all();
    const task = new Task();
    task.fill({
      description,
    });
    await user.tasks().save(task);
    return task;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    AuthorizationService.verifyPromission(task, user);
    await task.delete();
    return task;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    AuthorizationService.verifyPromission(task, user);
    task.merge(request.only(['description', 'completed']));
    await task.save();
    return task;
  }
}

module.exports = TaskController;
