# Deep Story

Go deep into a story by adding a story within each word. Maybe like a mini internet? Not sure.

## Todos

[X] CRUD for story words
[X] Pressing enter saves a line break (could do something with this later)
[X] Scalable meta-UI to hold many nested stories, do navigation (stories side by side, with some kind of breadcrumbs up top?)
[X] Ability to add more words to the end of a line
[X] Autofocus on the input, make it only as wide as the current input
[X] Switch to a monospaced font
[ ] Periodically create a backup JSON database that can be downloaded as a file
[ ] Database backup JSON uploader and parser
[ ] `/commands`, like `/fake` and the Faker tags
[ ] Slash command that allow you to add an outgoing connection to another reference
[ ] Show how many incoming and outgoing references there are to a reference
[X] Add user accounts...maybe just by hash for now? They become the root.
[X] Add a router.
[X] Every reference needs a url. Structure is `/r/ID`?
[ ] Every reference has a type
[X] Move hover tooltip tools to the toolbar
~~[ ] Store user data in localhost (with a hook?)~~
[X] Set up ContextAPI
[X] Google account login
[ ] `/details` to show more info about the ref itself
[ ] Move toolbar to own component
[X] Fix dive functionality for non-users
[ ] Fix browser history (`window.location.replace` fucks it up...just use `<Link/>`)
[ ] Bigger Dive button
[ ] Navigation in the tool bar...breadcrumbs?
[ ] Click in story to relocate cursor...use selectedRefId for cursor location?
[X] `contentEditable` to directly edit words
[ ] Build out data mock type
