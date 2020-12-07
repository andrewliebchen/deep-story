# Deep Story

Go deep into a story by adding a story within each word. Maybe like a mini internet? Not sure.

## Milestones

1. Basic CRUD for `story` ref types
2. Create, edit, and manage `mock` ref types
3. Add `resource` ref types
4. Add `task` ref types
5. Add teams
6. Deployment

### 🚧 Milestone 1: Basic CRUD for `story` ref types

- ✅ CRUD for story words
- ✅ Pressing enter saves a line break (could do something with this later)
- ✅ Scalable meta-UI to hold many nested stories, do navigation (stories side by side, with some kind of breadcrumbs up top?)
- ✅ Ability to add more words to the end of a line
- ✅ Autofocus on the input, make it only as wide as the current input
- ✅ Switch to a monospaced font
- Download backup (JSON?) for the collection
- Database backup JSON uploader and parser
- ✅ Add user accounts...maybe just by hash for now? They become the root.
- ✅ Add a router.
- ✅ Every reference needs a url. Structure is `/r/ID`?
- ✅ Every reference has a type
- ✅ Move hover tooltip tools to the toolbar
- ✅ Set up ContextAPI
- ✅ Google account login
- ✅Move toolbar to own component
- ✅ Fix dive functionality for non-users
- ✅ Fix browser history (`window.location.replace` fucks it up...just use `<Link/>`)
- ✅ Bigger Dive button
- ✅ Navigation in the tool bar...breadcrumbs?
- ✅ Click in story to relocate cursor...use selectedRefId for cursor location?
- ✅ Paginate between words with arrow and tab keys
- ✅ Press esc to switch inline input and new input
- Wrap up work on the cursor
  - ✅ Select spaces between words to add words
  - Select paragraph breaks to add paragraphs
- ✅ Update urls to be `/refs/:refId`
- ✅ Users can have more than one base ref
- ✅ `/refs` is an index list of all refs for that user
- Basic ref search
- Should there be a top-level keycode listener in the provider? Or one place that has all the keycode stuff at least.

### ⏳ Milestone 2: Create, edit, and manage `mock` ref types

Hopefully, this will be the first real "magic moment..."

- Mock CRUD
- Display Mock ref inline
- `/mocks` index page list of all mocks
- Add an existing mock to a ref

### ⏳ Milestone 3: Add `resource` ref types

Important to demonstrate that it at least has the ambition to work with the outside world.

- Add a resource (can be website, doc, or image)
- Inline preview
- `/resources` index page list of all resources

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
