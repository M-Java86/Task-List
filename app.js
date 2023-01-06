// Begin creating the element
/** addEventListener takes two arguments
 * 1st is the TYPE of event being listened for
 * 2nd is the LISTENER's callback argument containing what will happen
 *    when the event occurs
 *
 */

window.addEventListener('load', () => {
  // everything we want to do when the page loads
  // console.log('Loaded');
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  // console.log(form, input, list_el);
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // ** Define task node variable
    const task = input.value;

    // ** What you do if falsy (has no value)
    if (!task) {
      alert('Human, you must add a task. Sincerely, Your Overlords');
      return;
    }
    // ** What to do if truthy

    // ** Create a task node
    const task_el = document.createElement('div');
    task_el.classList.add('task');
    // div.task

    // ** Create the content of that node
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // div.content

    // ** Add child to parent node
    task_el.appendChild(task_content_el);
    /*
      div.task
        div.content
    */
    // ** Create task input element
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');
    // set the readonly attribute to equal readonly

    task_content_el.appendChild(task_input_el);
    /*
      div.task
        div.content
          input.text
    */
    // ** Let's get some action on!
    // ** Btns group
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    // ** Edit btn
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

    // ** Delete btn
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

    // ** Group btn together
    // task_actions_el, task_edit_el, task_delete_el
    // div.actions
    // button.edit
    // button.delete
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    /**
     * task_actions_ el = div.actions
     *    button.edit
     *    button.delete
     */
    // ** Append btns to parent node
    task_el.appendChild(task_actions_el);
    /**
     * <div className="task">
     *    <div className="content">...</div>
     *    <div className="actions">...</div>
     * </div>
     */
    // ** Append individual task to parent node already on DOM
    list_el.appendChild(task_el);

    input.value = '';

    // ** Edit Btn Functionality
    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerHTML.toUpperCase() === 'EDIT') {
        // task readonly attribute => remove
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText = 'Save';
      } else {
        // make input readonly
        task_input_el.setAttribute('readonly', 'readonly');
        // change btn innerText back to edit
        task_edit_el.innerText = 'edit';
      }
    });

    // ** Delete Btn Functionality
    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });
  });

  // TODO: Add capability to save tasks between refreshes
  // ** hint: window.localStorage()
});
