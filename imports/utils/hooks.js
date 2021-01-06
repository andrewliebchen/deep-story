import { isReady } from "./helpers";
import { Meteor } from "meteor/meteor";
import { MocksCollection } from "../api/mocks";
import { RefsCollection } from "../api/refs";
import { ResourcesCollection } from "../api/resources";
import { TasksCollection } from "../api/tasks";
import { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

const userId = Meteor.userId();

export const useAccount = () =>
  useTracker(() => {
    const user = Meteor.user();

    return {
      user,
      userId,
      isLoggedIn: !!userId,
    };
  }, []);

export const useGetRef = (id) => useTracker(() => RefsCollection.findOne(id));

export const useBaseRefs = () =>
  useTracker(() => {
    const refs = RefsCollection.find({ parentId: userId }).fetch();

    return {
      refs,
    };
  }, []);

export const useChildRefs = (parentId) =>
  useTracker(() => {
    const refs = RefsCollection.find(
      { parentId: parentId },
      { sort: { rank: 1 } }
    ).fetch();

    const parentRef = RefsCollection.findOne(parentId);

    return {
      refs,
      parentRef,
    };
  });

export const useChildRefsCount = (parentId) =>
  useTracker(() => RefsCollection.find({ parentId: parentId }).fetch().length);

export const useRefSearch = (value) => {
  const refs = useTracker(() => RefsCollection.find({}).fetch());

  return refs.filter(
    (ref) => ref.title && ref.title.toLowerCase().includes(value.toLowerCase())
  );
};

export const useGetMocks = (query) =>
  useTracker(() => {
    const mocks = MocksCollection.find(query).fetch();

    return mocks;
  });

export const useGetResource = (query) =>
  useTracker(() => ResourcesCollection.findOne(query));

export const useGetTasks = (query) =>
  useTracker(() => {
    const tasks = TasksCollection.find(query, {
      sort: { createdAt: 1 },
    }).fetch();

    // Join the assigned user info with the task
    tasks.map((task, i) => {
      tasks[i].assignedTo = Meteor.user({ _id: task.assignedTo });
    });

    return tasks;
  });
