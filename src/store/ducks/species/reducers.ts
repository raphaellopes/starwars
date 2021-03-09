// Locals
import {
  SpeciesStateType,
  SpeciesActionTypes,
  SpeciesCreators,
  SpeciesDataType,
} from './types';

export const initialState: SpeciesStateType = {
  status: 'initial',
  loading: false,
  data: {},
};

export const speciesReducer = (
  state = initialState,
  action: SpeciesActionTypes
): SpeciesStateType => {
  switch (action.type) {
    case SpeciesCreators.SPECIES_STATUS: {
      const payloadStatus = action.payload?.status;
      const { status } = state;
      const result =
        status === payloadStatus
          ? state
          : {
              ...state,
              status: payloadStatus,
              loading: payloadStatus === 'fetching',
            };
      return result;
    }
    case SpeciesCreators.SPECIES_DATA: {
      const { data } = action.payload;

      const result: SpeciesDataType = Object.entries(data).reduce(
        (merged, [id, item]) => ({
          ...merged,
          [id]: {
            ...(merged[id] || {}),
            ...item,
          },
        }),
        state.data
      );

      return {
        ...state,
        data: result,
      };
    }
    default:
      return state;
  }
};
