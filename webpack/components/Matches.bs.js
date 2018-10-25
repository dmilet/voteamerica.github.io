// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Table$VoteUSReason = require("./Table.bs.js");
var Utils$VoteUSReason = require("./Utils.bs.js");
var Defaults$VoteUSReason = require("./Defaults.bs.js");
var LeftPaddedButton$VoteUSReason = require("./ui/LeftPaddedButton.bs.js");

var component = ReasonReact.statelessComponent("Matches");

var tableType = "matches";

var matchTableColumns = /* array */[
  {
    Header: "Driver",
    accessor: "uuid_driver"
  },
  {
    Header: "Rider",
    accessor: "uuid_rider"
  },
  {
    Header: "City",
    accessor: "city"
  },
  {
    Header: "State",
    accessor: "full_state"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Created",
    accessor: "created_ts"
  },
  {
    Header: "Updated",
    accessor: "last_updated_ts"
  },
  {
    Header: "DriverCollectionZIP",
    accessor: "DriverCollectionZIP"
  },
  {
    Header: "Drive Times - Local",
    accessor: "AvailableDriveTimesLocal"
  },
  {
    Header: "Seat Count",
    accessor: "SeatCount"
  },
  {
    Header: "License Number",
    accessor: "DriverLicenseNumber"
  },
  {
    Header: "Driving for Organization",
    accessor: "DrivingOBOOrganizationName"
  },
  {
    Header: "Driver First Name",
    accessor: "DriverFirstName"
  },
  {
    Header: "Driver Last Name",
    accessor: "DriverLastName"
  },
  {
    Header: "Rider First Name",
    accessor: "RiderFirstName"
  },
  {
    Header: "Rider Last Name",
    accessor: "RiderLastName"
  },
  {
    Header: "Rider Email",
    accessor: "RiderEmail"
  },
  {
    Header: "Rider Phone",
    accessor: "RiderPhone"
  },
  {
    Header: "Rider Collection ZIP",
    accessor: "RiderCollectionZIP"
  },
  {
    Header: "Rider Dropoff ZIP",
    accessor: "RiderDropOffZIP"
  },
  {
    Header: "Rider Collection Street Number",
    accessor: "RiderCollectionStreetNumber"
  },
  {
    Header: "Rider Collection Address",
    accessor: "RiderCollectionAddress"
  },
  {
    Header: "Rider Destination Address",
    accessor: "RiderDestinationAddress"
  },
  {
    Header: "Ride Times Local",
    accessor: "AvailableRideTimesLocal"
  },
  {
    Header: "Driver Notes",
    accessor: "driver_notes"
  },
  {
    Header: "Rider Notes",
    accessor: "rider_notes"
  },
  {
    Header: "Score",
    accessor: "score"
  }
];

function tableMatch(itemDetails) {
  return {
          status: itemDetails.status,
          uuid_driver: itemDetails.uuid_driver,
          uuid_rider: itemDetails.uuid_rider,
          city: itemDetails.city,
          full_state: itemDetails.full_state,
          DriverCollectionZIP: itemDetails.DriverCollectionZIP,
          AvailableDriveTimesLocal: itemDetails.AvailableDriveTimesLocal,
          SeatCount: itemDetails.SeatCount,
          DriverLicenseNumber: itemDetails.DriverLicenseNumber,
          DrivingOBOOrganizationName: itemDetails.DrivingOBOOrganizationName,
          DriverFirstName: itemDetails.DriverFirstName,
          DriverLastName: itemDetails.DriverLastName,
          RiderFirstName: itemDetails.RiderFirstName,
          RiderEmail: itemDetails.RiderEmail,
          RiderLastName: itemDetails.RiderLastName,
          RiderPhone: itemDetails.RiderPhone,
          RiderCollectionZIP: itemDetails.RiderCollectionZIP,
          RiderDropOffZIP: itemDetails.RiderDropOffZIP,
          AvailableRideTimesLocal: itemDetails.AvailableRideTimesLocal,
          RiderCollectionStreetNumber: itemDetails.RiderCollectionStreetNumber,
          RiderCollectionAddress: itemDetails.RiderCollectionAddress,
          RiderDestinationAddress: itemDetails.RiderDestinationAddress,
          driver_notes: itemDetails.driver_notes,
          rider_notes: itemDetails.rider_notes,
          created_ts: itemDetails.created_ts,
          last_updated_ts: itemDetails.last_updated_ts,
          score: itemDetails.score
        };
}

function make(sectionHeading, loginInfo, apiInfo, matchesInfo, getMatchesList, hideMatchesList, setInfoMatchesList, hideExpiredMatchesList, hideConfirmedMatchesList, showCurrentMatch, hideCurrentMatch, _) {
  var matchesTableOnPageChangeHandler = function (pageIndex) {
    var pageSize = matchesInfo.listPageSize;
    return Utils$VoteUSReason.setInfoJs(setInfoMatchesList, pageIndex, pageSize);
  };
  var matchesTableOnPageChangeSizeHandler = function (size, pageIndex) {
    return Utils$VoteUSReason.setInfoJs(setInfoMatchesList, pageIndex, size);
  };
  var matchesTdPropsHandler = function (_, rowInfoOption, _$1, _$2) {
    var itemDriverUuid = rowInfoOption !== undefined ? Js_primitive.valFromOption(rowInfoOption).original.uuid_driver : "";
    var itemRiderUuid = rowInfoOption !== undefined ? Js_primitive.valFromOption(rowInfoOption).original.uuid_rider : "";
    var tableClickHandler = function (_, handleOriginalOption) {
      if (rowInfoOption !== undefined) {
        var sr = function (fx,itemDetails){{ fx(itemDetails); return 0; }};
        var itemDetails = Js_primitive.valFromOption(rowInfoOption).original;
        var currentMatch = tableMatch(itemDetails);
        sr(showCurrentMatch, Js_primitive.some(currentMatch));
      } else {
        Curry._1(hideCurrentMatch, /* () */0);
      }
      if (handleOriginalOption !== undefined) {
        Curry._1(handleOriginalOption, /* () */0);
      }
      return /* () */0;
    };
    var getBkgColour = function () {
      if (itemDriverUuid === matchesInfo.currentMatch.uuid_driver && itemRiderUuid === matchesInfo.currentMatch.uuid_rider) {
        return Defaults$VoteUSReason.highlightSelectedRowBackgroundColour;
      } else {
        return Defaults$VoteUSReason.defaultRowBackgroundColour;
      }
    };
    var bkgStyle = {
      background: getBkgColour(/* () */0)
    };
    return {
            onClick: tableClickHandler,
            style: bkgStyle
          };
  };
  var matchesTableHideExpiredHandler = function () {
    return Curry._1(hideExpiredMatchesList, /* () */0);
  };
  var matchesTableHideConfirmedHandler = function () {
    return Curry._1(hideConfirmedMatchesList, /* () */0);
  };
  var handleGetMatchListClick = function () {
    var token = loginInfo.token;
    var url = apiInfo.apiUrl;
    var gl = function (fx,url,token){{ fx(url, token); return 0; }};
    gl(getMatchesList, url, token);
    return /* () */0;
  };
  var handleHideMatchListClick = function () {
    Curry._1(hideMatchesList, /* () */0);
    return /* () */0;
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var tableMatchesAll = $$Array.map(tableMatch, matchesInfo.matches);
              var confirms = Utils$VoteUSReason.filterArray((function (m) {
                      return m.status === "MatchConfirmed";
                    }), tableMatchesAll);
              var confirmsKeys = $$Array.map((function (c) {
                      return c.uuid_rider;
                    }), confirms);
              var filterProposedAndConfirmed = function (m) {
                var s = m.status;
                var key = m.uuid_rider;
                if (s !== "MatchProposed" && s !== "ExtendedMatch") {
                  return true;
                } else if (s === "ExtendedMatch") {
                  return false;
                } else {
                  var keyMatched = function (k) {
                    return k === key;
                  };
                  return !Utils$VoteUSReason.existsArray(keyMatched, confirmsKeys);
                }
              };
              var filterExpiredMatches = function (matches) {
                if (matchesInfo.hideExpiredCanceled === true) {
                  var filterMatches = function (rider) {
                    if (rider.status !== "Expired") {
                      return rider.status !== "Canceled";
                    } else {
                      return false;
                    }
                  };
                  return Utils$VoteUSReason.filterArray(filterMatches, matches);
                } else {
                  return matches;
                }
              };
              var filterConfirmedMatches = function (matches) {
                if (matchesInfo.hideConfirmed === true) {
                  var filterMatches = function (rider) {
                    return rider.status !== "MatchConfirmed";
                  };
                  return Utils$VoteUSReason.filterArray(filterMatches, matches);
                } else {
                  return matches;
                }
              };
              var tableMatchesStepZero = Utils$VoteUSReason.filterArray(filterProposedAndConfirmed, tableMatchesAll);
              var tableMatchesStepOne = filterExpiredMatches(tableMatchesStepZero);
              var tableMatches = filterConfirmedMatches(tableMatchesStepOne);
              var tableDivStyle = {
                marginTop: "20px",
                marginBottom: "10px"
              };
              var checkboxAreaStyle = {
                display: "inline-block",
                marginTop: "20px"
              };
              var checkboxLabelStyle = {
                paddingRight: "40px"
              };
              var currentMatchInfo = function (currentMatch) {
                return React.createElement("div", undefined, React.createElement("h3", undefined, "Current match info:"), React.createElement("div", undefined, "Driver uuid: " + currentMatch.uuid_driver), React.createElement("div", undefined, "Rider uuid: " + currentMatch.uuid_rider), React.createElement("div", undefined, currentMatch.status));
              };
              var tableMatchesJSX;
              if (matchesInfo.showMatchList) {
                var match = matchesInfo.showCurrentMatchDetails;
                tableMatchesJSX = React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("button", {
                              className: "button button--large",
                              id: "hideMatchListButton",
                              onClick: handleHideMatchListClick
                            }, "Hide List"), ReasonReact.element(undefined, undefined, LeftPaddedButton$VoteUSReason.make((function (prim, prim$1, prim$2) {
                                    return {
                                            className: prim,
                                            id: prim$1,
                                            onClick: prim$2
                                          };
                                  }), "button button--large", "refreshMatchesListButton", handleGetMatchListClick, /* array */["Refresh List"]))), React.createElement("div", undefined, React.createElement("div", {
                              className: "form-group checkbox",
                              style: checkboxAreaStyle
                            }, React.createElement("label", {
                                  className: "",
                                  style: checkboxLabelStyle,
                                  htmlFor: "hideExpired"
                                }, "Hide Expired/Cancelled"), React.createElement("input", {
                                  className: "",
                                  id: "hideExpired",
                                  checked: matchesInfo.hideExpiredCanceled,
                                  type: "checkbox",
                                  onChange: matchesTableHideExpiredHandler
                                })), React.createElement("div", {
                              className: "form-group checkbox",
                              style: checkboxAreaStyle
                            }, React.createElement("label", {
                                  className: "",
                                  style: checkboxLabelStyle,
                                  htmlFor: "hideConfirmed"
                                }, "Hide Confirmed"), React.createElement("input", {
                                  className: "",
                                  id: "hideConfirmed",
                                  checked: matchesInfo.hideConfirmed,
                                  type: "checkbox",
                                  onChange: matchesTableHideConfirmedHandler
                                }))), React.createElement("div", {
                          style: tableDivStyle
                        }, ReasonReact.element(undefined, undefined, Table$VoteUSReason.make((function (prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8, prim$9) {
                                    return {
                                            className: prim,
                                            type: prim$1,
                                            columns: prim$2,
                                            defaultPageSize: prim$3,
                                            page: prim$4,
                                            pageSize: prim$5,
                                            data: prim$6,
                                            onPageChange: prim$7,
                                            onPageSizeChange: prim$8,
                                            getTdProps: prim$9
                                          };
                                  }), "basicMatchTable", tableType, 5, matchesInfo.listPageIndex, matchesInfo.listPageSize, matchTableColumns, tableMatches, matchesTableOnPageChangeHandler, matchesTableOnPageChangeSizeHandler, matchesTdPropsHandler, /* array */[]))), match ? currentMatchInfo(matchesInfo.currentMatch) : React.createElement("div", undefined, "No match selected"));
              } else {
                tableMatchesJSX = React.createElement("div", undefined, React.createElement("button", {
                          className: "button button--large",
                          id: "showGetMatchList",
                          onClick: handleGetMatchListClick
                        }, "Show Matches List"));
              }
              var matchesInfoArea = loginInfo.loggedIn ? React.createElement("div", undefined, React.createElement("h2", {
                          className: "operator-page-heading"
                        }, sectionHeading), React.createElement("div", undefined, tableMatchesJSX)) : null;
              return React.createElement("div", undefined, matchesInfoArea);
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.sectionHeading, jsProps.loginInfo, jsProps.apiInfo, jsProps.matchesInfo, jsProps.getMatchesList, jsProps.hideMatchesList, jsProps.setInfoMatchesList, jsProps.hideExpiredMatchesList, jsProps.hideConfirmedMatchesList, jsProps.showCurrentMatch, jsProps.hideCurrentMatch, /* array */[]);
      }));

exports.component = component;
exports.tableType = tableType;
exports.matchTableColumns = matchTableColumns;
exports.tableMatch = tableMatch;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
