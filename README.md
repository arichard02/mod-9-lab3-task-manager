*********************
Reflection Questions
*********************

How did you ensure unique keys for your list items?

For my list items, I used the id property from each task as the key when mapping over the tasks array. Since each task has a unique id, it made the most sense to use that instead of something like the array index.

What considerations did you make when implementing the filtering functionality?

When I implemented filtering, I wanted to make sure I wasn’t changing the original tasks array. Instead of creating a separate state for filtered tasks, I used the .filter() method directly when rendering.

How did you handle state updates for task status changes?

I managed all task state in the App component using useState, since that’s the top-level component. When a task’s status changes, I pass a function down to TaskItem that sends the task ID and new status back up. Then I used .map() to update the correct task without changing the original array.

What challenges did you face when implementing conditional rendering?

One challenge I faced was figuring out how to apply different styles based on the task status without cluttering the JSX. To keep things organized, I created a helper function that returns the appropriate class name instead of putting multiple conditional checks directly inside the JSX.
