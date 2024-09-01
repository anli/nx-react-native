# NX REACT NATIVE

## Folder structure

```bash
  apps/
    today: expo app to CRUD tasks
      - .env
      - src
        - app: routes
          - Root - entry point with providers
            - AppLayout - controller based on authentication state
              - SignIn - unauthenticated entry point
              - (tabs) - authenticated entry point
              - HomeTab - showing task list
              - SettingsTab - showing configurable settings and account management

  libs/
    @pages/
      authentication: expo library for authentication related pages
        - SignInPage

      settings: expo library for settings related pages
        - SettingsPage

      task: expo library for task related pages
        - TaskListPage

    @widgets/
      page
        - PageWidget - renders config defined content with components from features, entities, shared

    @features/
      authentication
        - SignInButton - interactive button to sign in
        - SignOutCard - interactive card to sign out

      settings
        - DarkModeSwitch - interactive switch to toggle dark model

      task
        - TaskCheckbox - toggle task completion
        - TaskForm - form to create/edit task
        - TaskDeleteButton - button to delete task
        - createTask / deleteTask / updateTask - data write for a specific task

    @entities/
      authentication
        - AuthenticationProvider - Pass configurations
        - useAuthentication - utils for sign in/out, authentication state

      settings
        - settingsModel.PageComponents - data storage of page components
        - DarkModeCard - skeleton UI with interactive slots

      task
        - Task - typing definition of a task
        - useTask - data read for a specific task
        - useTasks - data read for all task data
        - TaskList - list of tasks
        - TaskListItem - skeleton UI with interactive slots

      page
        - usePageContent - data read for configuration driven page content
        - renderPageContent - utils to render page content

    @shared/
      ui: reusable UI components without business logic
      lib: generic utils
      api: api related typings, caching, helpers
```
