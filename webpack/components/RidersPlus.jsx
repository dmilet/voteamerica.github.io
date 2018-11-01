import { connect } from 'react-redux';

import RidersBase from './Riders.bs.js';

import {
  getRidersList,
  hideRidersList,
  showRidersListDownloadLink,
  hideRidersListDownloadLink,
  setInfoRidersList,
  hideExpiredRidersList,
  hideConfirmedRidersList,
  showCurrentMatchOnlyRidersList,
  showCurrentRider,
  hideCurrentRider
} from '../actions/index.js';

const mapStateToProps = state => {
  const { apiInfo, loginInfo, ridersInfo, matchesInfo } = state;

  return { apiInfo, loginInfo, ridersInfo, matchesInfo };
};

const mapDispatchToProps = {
  getRidersList,
  hideRidersList,
  showRidersListDownloadLink,
  hideRidersListDownloadLink,
  setInfoRidersList,
  hideExpiredRidersList,
  hideConfirmedRidersList,
  showCurrentMatchOnlyRidersList,
  showCurrentRider,
  hideCurrentRider
};

const RidersPlus = connect(
  mapStateToProps,
  mapDispatchToProps
)(RidersBase);

export default RidersPlus;
