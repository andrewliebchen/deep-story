import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { TasksCollection } from "../api/tasks";
import { useTracker } from "meteor/react-meteor-data";
import { useState } from "react";

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

export const useGetRef = (id) => {
  return useTracker(() => RefsCollection.findOne(id), []);
};

export const useRefSearch = (value) => {
  const refs = useTracker(() => RefsCollection.find({}).fetch());

  return refs.filter(
    (ref) => ref.title && ref.title.toLowerCase().includes(value.toLowerCase())
  );
};

export const useFocus = () => {
  const [focus, setFocus] = useState(false);
  const setFocusWithTrueDefault = (param) =>
    setFocus(typeof parm === "boolean" ? param : false);
  return [
    setFocusWithTrueDefault,
    {
      key: focus,
      autoFocus: focus,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    },
  ];
};

export const useGetTasks = (query) =>
  useTracker(() =>
    TasksCollection.find(query, { sort: { createdAt: -1 } }).fetch()
  );
