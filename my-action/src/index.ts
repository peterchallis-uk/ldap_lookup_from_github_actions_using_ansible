import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const username = core.getInput('username'); // 👈 This stores the input in a variable
    console.log(`Username entered: ${username}`);

    // You can now use `username` anywhere in your logic
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
