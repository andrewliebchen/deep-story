import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const TasksCollection = new Mongo.Collection("tasks");

Meteor.methods({
  "tasks.insert"(parentId, value) {
    return TasksCollection.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      text: value,
      done: false,
      parentId: parentId,
      assignedTo: Meteor.userId(), // TODO: This needs to be in the edit ui
    });
  },

  "tasks.toggle"(id) {
    const task = TasksCollection.findOne(id);

    console.log(task);

    return TasksCollection.update(id, { $set: { done: !task.done } });
  },

  "tasks.remove"(id) {
    return TasksCollection.remove(id);
  },

  "tasks.update"(id, value) {
    return TasksCollection.update(id, { $set: { text: value } });
  },

  "tasks.togglePriority"(id) {
    const task = TasksCollection.findOne(id);

    return TasksCollection.update(id, { $set: { priority: !task.priority } });
  },
});
