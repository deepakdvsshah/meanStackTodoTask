---
---

# Phrase secret Search

## Document History

| **Version Number** |  **Date**  | **Edited by** |  **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :-------------------: |
|        1.0         | 19-05-2021 |  Deepak Shah  | Initial Documentation |

## Introduction

```
This is a application which contains one header and add dependency from 2 feature i.e, search.
```

## Preconditions

To integrate feature to application there are two ways.
1.load children
{
path: '',
loadChildren: () =>
import('@create-task/task-form').then((m) => m.TaskFormModule),
},
{
path: 'view-task',
loadChildren: () =>
import('@create-task/view-task').then((m) => m.ViewTaskModule),
}

2.html binding
<create-task-create-task-form></create-task-create-task-form>

## Logic

**Task add**
For add task we need to add create task lib for task add.
For view task we need to add view task lib for view task.

## Post-conditions

After Integration of add-task feature we can do add task.

## Dependency

App contains 2 feature which mentioned at below :

## task-form

## view-task
