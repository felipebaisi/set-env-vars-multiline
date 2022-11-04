// import {Octokit} from '@octokit/rest';
import * as core from '@actions/core';
// import {createAppAuth} from '@octokit/auth-app';


const setEnvironmentVariable = (key: string, value: string) => {
  core.exportVariable(key, value);
};

async function run(
  multiLineVars: string,
): Promise<void> {
  console.log("Received multivars", multiLineVars)
  const varsArray = multiLineVars.split(/(?:\r\n|\r|\n)/g);
  for (const vars of varsArray) {
    const keypair = vars.split("=")
    console.log(`Setting ${keypair[0]} to ${keypair[1]}`)
    setEnvironmentVariable(keypair[0], keypair[1])
  }
  
}

// Collecting inputs
const multiLineVars: string = core.getInput('MULTI_LINE_VARS');
run(multiLineVars)
