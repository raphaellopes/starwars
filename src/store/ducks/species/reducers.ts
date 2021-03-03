// Locals
import {
  SpeciesStateType,
  SpeciesActionTypes,
  SpeciesCreators,
  SpeciesDataType,
  SpecieType,
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
      const formattedData: SpeciesDataType = {};
      const { data } = action.payload;
      data.map((item: SpecieType) => (formattedData[item.id] = item));

      return {
        ...state,
        data: { ...state.data, ...formattedData },
      };
    }
    default:
      return state;
  }
};
