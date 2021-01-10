import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const TasksCollection = new Mongo.Collection("tasks");

Meteor.methods({
  "tasks.insert"(options) {
    const newParentRefId = Meteor.call("refs.insert", {
      ...options,
    });

    return {
      parentRefId: newParentRefId,
    };
  },

  "tasks.insertTask"(parentId, value) {
    return TasksCollection.insert({
      createdAt: Date.now(),
      createdBy: Meteor.userId(),
      text: value,
      done: false,
      parentId: parentId,
    });
  },

  "tasks.toggle"(id) {
    const task = TasksCollection.findOne(id);

    return TasksCollection.update(id, { $set: { done: !task.done } });
  },

  "tasks.remove"(id) {
    return TasksCollection.remove(id);
  },

  "tasks.update"(id, value) {
    return TasksCollection.update(id, { $set: { text: value } });
  },
});
