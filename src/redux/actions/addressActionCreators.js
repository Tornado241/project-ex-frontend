export const addrestActionTypes = {
  SET_ADDRESS: 'SET_ADDRESS',
  SET_ERROR_NET_WORK: 'SET_ERROR_NET_WORK',
  SET_INFO_NETWORK: 'SET_INFO_NETWORK',
  DISCONNECT_WALLET: 'DISCONNECT_WALLET',
};

export const addressActions = {
  setInfoUser: (address, currentNetworkId) => ({
    type: addrestActionTypes.SET_ADDRESS,
    address,
    currentNetworkId,
  }),
  setErrorNetWork: boolean => ({
    type: addrestActionTypes.SET_ERROR_NET_WORK,
    errorNetwork: boolean,
  }),
  setInfoNetWork: infoNetwork => ({
    type: addrestActionTypes.SET_INFO_NETWORK,
    infoNetwork,
  }),
  disconnectWallet: () => ({
    type: addrestActionTypes.DISCONNECT_WALLET,
  }),
};
