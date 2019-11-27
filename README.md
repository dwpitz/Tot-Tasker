## TOT TASKER - A MOTIVATIONAL, GAMIFIED CHOREBOARD FOR DISTRESSED PARENTS AND FUN LOVIN' TOTS.

## USER STORIES
* Users will be able to:
	* Register an account for their family.
	* Add children and partner(s) (admins) to the site.
	* See Tots current tasks/progress towards task goals on the main dashboard.
	* Assign New Tasks To Tots via the Task Adder
	* Set the number of instances a Tot must complete said Task to achieve a goal.
	* Set a reward for the Tot upon meeting their goal.
	* Edit A Task's overall goal or reward. 
	* Edit Tot's progress or reset the Goal to 0 at the Parent's discretion (i.e. - child forgot to make bed.) if goal was not met.  
	* Set A Speed Challenge where Tots need to complete a single, specific task in a set amount of time for bonus points towards the task of their choice. 
	* Reset The family scoreboard - end of the week, end of the month, whenever!

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
	* Image - Img link
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
	* register route - ('/users/register') --> POST
	* login route - ('/users/login') --> POST
	* logout route - ('/users/logout') --> GET

* Main Site Routes/
	* main site route - ('/index') --> GET
	* tot component - lists all tots & their active tasks - ('/tots') --> GET
	* scoreboard - ('/tots/<tot_id>') - GET
	* + / - scoring component - '/tots/<tot_id>/<task_id>' --> POST

* Task Adder
	* create task route - ('/tasks/new') --> POST
    * update/edit task route - ('/tasks/<task_id>') --> PUT 
    * delete task route - ('/tasks/<task_id>') --> Delete

* Speed Challenge
	* tot component - /tots/<tot_id> --> GET
	* task component - ('/tasks') --> POST
	* submit component - /tots/<tot_id>/<task_id>' --> POST


* Tot Mode
	* scoreboard (from above) - (/tots/<tot_id>') - GET
	* tot component (from above) - lists all tots & their active tasks - ('/tots') --> GET




