export const HTTP_RESPONSE = {
  OK: 200,
  ERROR_CODE_401: 401,
};

export const Language = {
  EN: 'en',
  JA: 'ja',
  KO: 'ko',
  CN: 'cn',
};

export const TYPE_OF_ANT_DESIGN = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  IMG_DONE: 'done',
};

export const WALLET_TYPES = {
  METAMASK: 'metamask',
  WALLET_CONNECT: 'wallet connect',
  WALLET_LINK: 'wallet link',
  DAPP: 'dapp',
};

export const TOKEN_VALUE = {
  ETH: 'ETH',
  BSC: 'BSC',
  N1: 'N1',
};

export const NETWORK_LINK = {
  [TOKEN_VALUE.ETH]: 'Etherscan',
  [TOKEN_VALUE.BSC]: 'BSCScan',
};

export const TYPE_TRANSACTION = {
  LOCK: 0,
  UNLOCK: 1,
};

export const TOKEN_FULL_NAME = {
  [TOKEN_VALUE.ETH]: 'Ethereum',
  [TOKEN_VALUE.BSC]: 'Binance Smart Chain',
};

export const INIT_UNIT_256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const ERROR_METAMASK = {
  CANCEL_METAMASK: 4001,
};

export const BSCMainnetChainId = '0x38';
export const BSCMainnetChainIdDec = '56';
export const BSCTestnetChainId = '0x61';
export const BSCTestnetChainIdDec = '97';
export const RKBTestnetChainId = '0x4';
export const RKBTestnetChainIdDec = '4';

export const ListChainNetSupport = [BSCMainnetChainId, BSCTestnetChainId, RKBTestnetChainId];

export const TIME_FORMAT = {
  DATE: 'DD-MM-YYYY',
  DATE_FORMAT_REQUEST: 'YYYY/MM/DD',
  TIME: 'HH:mm:ss',
  DATE_TIME: 'DD-MM-YYYY HH:mm:ss',
};

export const SWAP_STATUS = {
  PROCESSING: 'PROCESSING',
  CLAIMED: 'CLAIMED',
  UNCLAIMED: 'UNCLAIMED',
  CLAIMED_FAILED: 'UNCLAIMED',
  FAILED: 'FAILED',
};

export const PARAMS_TRANSACTIon = {
  skip: 1,
  limit: 10,
  fromDate: '',
  toDate: '',
  amount: '',
  transactionStatus: '',
  sortField: 'createdAt',
  sortType: '-1',
};

export const tokenByChainNet = {
  [BSCMainnetChainId]: TOKEN_VALUE.BSC,
  [BSCTestnetChainId]: TOKEN_VALUE.BSC,
  [RKBTestnetChainId]: TOKEN_VALUE.ETH,
};

export const LOCK = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PROGRESS: 'PROGRESS',
};

export const MINT = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PROGRESS: 'PROGRESS',
};

export const UNLOCK = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PROGRESS: 'PROGRESS',
};

export const BURN = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PROGRESS: 'PROGRESS',
};

export const EVENT_SOCKET = {
  TRANSFER_EVENT: 'nft-transfer-events', // claimed
  LOCK_UNLOCK_EVENT: 'nft-lock-unlock-events', // unclaimed
};

export const STATUS_STEP = {
  ['modal.title_submit_swap']: 1,
  ['modal.title_submit_swap_submited']: 2,
  ['my_transaction.title_success_claim']: 3,
};

export const STEPS_TITLE = ['swap_step.create', 'swap_step.verify', 'swap_step.submit', 'swap_step.claim'];

export const SORT_FORMAT = {
  DESC: -1,
  ASC: 1,
};

export const TIME_OUT_PROGRESS_SWAP = 1000 * 60 * 2;
