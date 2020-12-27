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

### ⏳ Milestone 3: Add `resource` ref types

Important to demonstrate that it at least has the ambition to work with the outside world.

- Add a resource (can be website, doc, or image)
- Inline preview
- Filter `/refs` page by all or type

- Favorite refs

### ⏳ Milestone 4: Add `task` ref types

This might change...but this was always an interesting feature of Quip, especially when they started doing things with tasks composed of structured data.

- Add a task list
- Todo list CRUD
- `/task` index page list of all tasks

### ⏳ Milestone 5: Add teams

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
