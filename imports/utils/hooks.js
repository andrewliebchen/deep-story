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

    return {
      refs,
    };
  }, []);

export const useRef = (id) => useTracker(() => RefsCollection.findOne(id), []);
