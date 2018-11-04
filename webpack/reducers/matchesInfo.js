import {
  DEFAULT_LIST_PAGE_INDEX,
  DEFAULT_LIST_PAGE_SIZE,
  LOGOUT,
  getMatchListTypes,
  matchesListDownloadLinkShowHideTypes,
  matchesGetHideListTypes,
  matchesListSetInfoType,
  matchesListHideExpiredType,
  matchesListHideConfirmedType,
  currentMatchShowHideTypes
} from '../actions/types';

const matchesInfo = (
  state = {
    showMatchList: false,
    matches: [],
    listPageIndex: DEFAULT_LIST_PAGE_INDEX,
    listPageSize: DEFAULT_LIST_PAGE_SIZE,
    hideExpiredCanceled: false,
    hideConfirmed: false,
    showCurrentMatchDetails: false,
    currentMatch: {},
    showDownloadLink: false,
    urlDownloadBlob: ''
  },
  action
) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        showMatchList: false,
        matches: [],
        listPageIndex: DEFAULT_LIST_PAGE_INDEX,
        showCurrentMatchDetails: false,
        currentMatch: {}
      };

    case getMatchListTypes.success: {
      const { data: matches } = action.payload;

      return { ...state, showMatchList: true, matches };
    }

    case matchesGetHideListTypes.hide:
      return { ...state, showMatchList: false, matches: [] };

    case matchesListDownloadLinkShowHideTypes.show: {
      const { urlDownloadBlob } = action.payload;

      return { ...state, showDownloadLink: true, urlDownloadBlob };
    }

    case matchesListDownloadLinkShowHideTypes.hide:
      return { ...state, showDownloadLink: false, urlDownloadBlob: '' };

    case currentMatchShowHideTypes.show:
      return {
        ...state,
        showCurrentMatchDetails: true,
        currentMatch: action.payload.itemDetails
      };

    case matchesListSetInfoType:
      return {
        ...state,
        listPageIndex: action.payload.listPageIndex,
        listPageSize: action.payload.listPageSize
      };

    case currentMatchShowHideTypes.hide:
      return { ...state, showCurrentMatchDetails: false, currentMatch: {} };

    case matchesListHideExpiredType:
      return { ...state, hideExpiredCanceled: !state.hideExpiredCanceled };

    case matchesListHideConfirmedType:
      return { ...state, hideConfirmed: !state.hideConfirmed };

    default:
      return state;
  }
};

export default matchesInfo;
