# Deep Story

Go deep into a story by adding a story within each word. Maybe like a mini internet? Not sure.

## Milestones

1. Basic CRUD for `story` ref types
2. Create, edit, and manage `mock` ref types
3. Add `resource` ref types
4. Add `task` ref types
5. Add teams
6. Deployment

### ✅ Milestone 1: Basic CRUD for `story` ref types

- ✅ Press esc or ~~enter~~ to un-select a Ref
- ✅ Affordance to toggle title on/off
- ✅ Add new ref creation component
- ✅ Markdown
- ✅ Create a new child ref from a word

### ✅ Milestone 2: Create, edit, and manage `mock` ref types

Hopefully, this will be the first real "magic moment..."

- ✅ Mock CRUD
- ✅ Display Mock ref inline
- ✅Link a ref to an existing mock (or any ref)
- ✅ Show parent ref at the top of the story
- ✅ Refresh mock values
- ✅ Add custom fields
- ✅ Refresh custom fields
- ✅ Remove custom fields
- ✅ Use standard title field instead of nickname

- ✅ Auto-expanding text box
- ✅ Improve base refs page
- ✅ Add button `titles` (maybe tooltips)
- ✅ Color themes based on type
- ✅ Show how many children a ref has...

### ✅ Milestone 3: Add `resource` ref types

Important to demonstrate that it at least has the ambition to work with the outside world.

- ✅ Add a resource (can be website, doc, or image)
- ✅ Inline preview
- ✅ Filter `/refs` page by all or type

### 🚧 Milestone 4: Add `task` ref types

This might change...but this was always an interesting feature of Quip, especially when they started doing things with tasks composed of structured data.

#### Todos

- ✅ Add a task list
- ✅ Tasks list CRUD
- ✅ Progress completing tasks
- ✅ Show who the task is assigned to
- ✅ Mark priority
- ✅ `/tasks` index page list of all tasks
- Group tasks on `/tasks` page by priority
- Delete associated tasks when task ref is deleted

#### Other

- ✅ Improve design
- ✅Reduce deploy size
  - ✅Run baseline size `meteor --extra-packages bundle-visualizer --production --settings settings.json`
    - Baseline: 4.35mb
    - ✅Without unicons: 3.82mb
  - ✅Replace Faker with [Casual](https://www.npmjs.com/package/casual)
  - ✅ Replace unicons with [Reline](https://jxnblk.github.io/reline/)
- Remove insecure and autopublish
- Add PRD content
- Should mocks and references be their own collections, like tasks?
  Would simplify the code quite a bit...

### ⏳ Milestone 5: Add teams

- Assign tasks to team members

### ⏳ Milestone 6: Deployment

### Later

- `/details` to show more info about the ref itself
- `/commands`, like `/fake` and the Faker tags
- Slash command that allow you to add an outgoing connection to another reference
- Show how many incoming and outgoing references there are to a reference
- Arrow up/down to select previous/next ref

## Glossary

### Parent ref

The first ref of a story. The parent ref's parent is the user.

## Story

A family of refs. The parent ref and it's immediate children.

## Ref

A chunk of information that's connected to other chunks.
