import * as TaskManager from 'expo-task-manager';

const BACKGROUND_TASK_NAME = 'console-log-task'
TaskManager.defineTask(BACKGROUND_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log('Background task error:', error.message);
    return;
  }
  if (data) {
    console.log('Background task executed at:', new Date());
    // You can do something with the data captured in the background if needed.
  }
});

export default BACKGROUND_TASK_NAME;
