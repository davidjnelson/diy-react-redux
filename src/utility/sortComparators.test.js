import { catsSortComparator } from './sortComparators';

describe('catsSortComparator', () => {
  it('should sort by upvotes', () => {
    expect([
      {
        upvotes: 1
      },
      {
        upvotes: 20
      },

      {
        upvotes: 3
      }
    ].sort(catsSortComparator('UPVOTES'))).toEqual([
      {
        upvotes: 20
      },
      {
        upvotes: 3
      },

      {
        upvotes: 1
      }
    ]);
  });

  it('should sort by date', () => {
    expect([
      {
        createdEpochSeconds: 1000
      },
      {
        createdEpochSeconds: 2000
      },

      {
        createdEpochSeconds: 3000
      }
    ].sort(catsSortComparator('DATE'))).toEqual([
      {
        createdEpochSeconds: 3000
      },
      {
        createdEpochSeconds: 2000
      },

      {
        createdEpochSeconds: 1000
      }
    ]);
  });
});
