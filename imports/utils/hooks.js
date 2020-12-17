import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
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

export const useBaseRefs = () =>
  useTracker(() => {
    console.log(userId);
    const refs = RefsCollection.find({ parentId: userId }).fetch();

    console.log(refs);

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

export const useGetRef = (key = "_id", value) => {
  let query = {};
  query[key] = value;
  return useTracker(() => RefsCollection.findOne(query), []);
};
