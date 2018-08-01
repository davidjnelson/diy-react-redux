/* @flow */

export const createActionCreator = (type: string, payloadName: string) => (payload: any) => {
  return {
    type,
    [payloadName]: payload
  };
};
