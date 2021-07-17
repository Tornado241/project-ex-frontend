import { addrestActionTypes } from '../actions/addressActionCreators';

const DEFAULT_STATE = {
  address: '',
  currentNetworkId: '',
  errorNetwork: false,
  infoNetwork: {},
};
export const addressReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case addrestActionTypes.SET_ADDRESS:
      return { ...state, address: action.address, currentNetworkId: action.currentNetworkId };
    case addrestActionTypes.SET_ERROR_NET_WORK:
      return { ...state, errorNetwork: action.errorNetwork };
    case addrestActionTypes.SET_INFO_NETWORK:
      return { ...state, infoNetwork: action.infoNetwork };
    case addrestActionTypes.DISCONNECT_WALLET:
      return { ...state, address: '', currentNetworkId: '', infoNetwork: {} };
    default:
      return state;
  }
};
