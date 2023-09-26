// BackgroundTask.js
import { registerTaskAsync } from 'expo-task-manager';

const BACKGROUND_TASK_NAME = 'console-log-task';

// Define the background task
registerTaskAsync(BACKGROUND_TASK_NAME, async () => {
  console.log('Background task executed at:', new Date());
  return BackgroundFetchResult.NewData; // Return a result to indicate success
});

export default BACKGROUND_TASK_NAME;
