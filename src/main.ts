// import {Octokit} from '@octokit/rest';
import * as core from '@actions/core';
// import {createAppAuth} from '@octokit/auth-app';


async function run(
  multiLineVars: string,
): Promise<void> {
  console.log("Received multivars", multiLineVars)
  const currentData = multiLineVars.split(/(?:\r\n|\r|\n)/g);
  console.log(currentData)
  console.log("Currentd data length", currentData.length)



}

// Collecting inputs
const multiLineVars: string = core.getInput('MULTI_LINE_VARS');
run(multiLineVars)
