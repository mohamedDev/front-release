"use strict";

const fileSystem = require("fs");

let jsonData = require("./package.json");
const oldBbuildVersion = jsonData.version;
const buildVersionSplited = oldBbuildVersion.split("+");
let newbuildNumber = 1;
if (buildVersionSplited[1]) {
  newbuildNumber = parseInt(buildVersionSplited[1]) + 1;
}
const newBuildVersion = buildVersionSplited[0] + "+" + newbuildNumber.toString();
jsonData.version = newBuildVersion;
const newJsonData = JSON.stringify(jsonData, null, 2).concat("\n");

fileSystem.writeFile("./package.json", newJsonData, (err) => {
  if (err) throw err;
  console.log("New Build version now is : " + newBuildVersion);
});
