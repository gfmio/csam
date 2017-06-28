csam
====

**csam** is a fast and minimal component-based framework based on the SAM (state-action-model) pattern.

Memory footprint so far: 16.5 MB for one instance
Response time < 40ms

# License: MIT

# To Do

* Readme
* Actions
  * Are there any useful default actions to be included here (e.g. transitionTo)?
* Examples
  * A type script example including all config to build the project
  * A JavaScript example including all config to build and run the project
* How can we decouple the history API events from specific model names?
* Can we get rid off the global `present` in `Model` without impacting the usability of actions?
* Better, stricter type declarations
* Should the API server be integrated here directly or in a separate project?
* Actions with before, around, after methods for aspect orientation and middleware (logging, authentication, data fetching, caching)
* Default solutions for authentication, access control, ...?
