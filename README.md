## TOT TASKER - A MOTIVATIONAL CHOREBOARD FOR DISTRESSED PARENTS AND FUN LOVIN' TOTS.

## USER STORIES
* Users will be able to:
	* Register an account for their family.
	* Add children and partner(s) (admins) to the site.
	* See Tots current tasks/progress towards task goals on the main dashboard.
	* Assign New Tasks To Tots via the Task Adder
	* Set the number of instances a Tot must complete said Task To Achieve A Goal.
	* Set a reward for the Tot upon meeting their goal.
	* Edit A Task's overall goal or reward. 
	* Reset the Goal to 0 at the Parent's discretion (i.e. - child forgot to make bed.) if goal was not met.  
	* Set A Speed Challenge where Tots need to complete a single, specific task in a set amount of time for a bonus points towards the task of their choice. 
	* Reset The family scoreboard

* In Tot Mode, Users Can Show Tots: 
	* Their Tasks
	* Their Progress To Their Goals
	* The family scoreboard for all competing children in the family.  

* ----------------------STRETCH GOALS--------------------------------

* Share messages and inside information with other Parents/Admins in the family's account.	
* Befriend admins from other families for messaging, sharing tips, and offering support.

## TRELLO BOARD
https://trello.com/b/1hGx58Q3/david-ps-capstone

## MODELS/SCHEMAS 
* Users
	* User Name - String
	* Full Name - String
	* Password - String
	* ID - Int
	* Tots Relation - String
	
* Tots
	* Name - String
	* Image - Img
	* ID - Int
	* Tasks Relation - Array
	
* Tasks
	* Type - String
	* Progress - Int?
	* Rewards - String
	* Complete - Boolean
	* ID

* Speed Challenge
	* Tot Relation - ID
	* Task - String
	* Score - Integer
	* Timer

## ROUTES - CRUDing 
* Register/Login Routes
	* register route - ('/tot-tasks/register') --> POST
	* login route - ('/tot-tasks/login') --> POST
	* logout route - ('/tot-tasks/logout') --> GET

* Main Site Routes/
	* main site route - ('/tot-tasks') --> GET
	* tot component - lists all tots & their active tasks - ('/tot-tasks/tots') --> GET
	* scoreboard - ('/tot-tasks/tots/<tot_id>') - GET
	* + / - scoring component - '/tot-tasks/tots/<tot_id>/<task_id>' --> POST

* Task Adder
	* create task route - ('/tot-tasks/tasks/new') --> POST
    * update/edit task route - ('/tasks/<task_id>') --> PUT 
    * delete task route - ('/tasks/<task_id>') --> Delete

* Speed Challenge
	* tot component - /tot-tasks/tots/<tot_id> --> GET
	* task component - ('/tot-tasks/tasks') --> POST
	* submit component - /tot-tasks/tots/<tot_id>/<task_id>' --> POST


* Tot Mode
	* scoreboard (from above) - ('/tot-tasks/tots/<tot_id>') - GET
	* tot component (from above) - lists all tots & their active tasks - ('/tot-tasks/tots') --> GET




