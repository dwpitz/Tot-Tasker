#TOT TASKS - A MOTIVATIONAL CHOREBOARD FOR DISTRESSED PARENTS AND FUN LOVIN' TOTS.

## USER STORIES
* User will be able to register an account for their family.

* User will be able to add children and partner(s) (admins) to the site.

* Users will be able to:
	* See Tots current tasks/progress towards task goals.
	* Assign New Tasks To Tots
	* Set the number of instances a Tot must complete said Task To Achieve A Goal
	* Set a reward for the Tot upon meeting their goal.
	* Edit A Task's overall goal or reward. 
	* Reset the Goal to 0 at the Parent's discretion (i.e. - child forgot to make bed.) if goal was not met.  
	* Set A Speed Challenge where Tots need to complete a single, specific task in a set amount of time for a bonus points on the scoreboard. 
	* Reset The family scoreboard

* In Tot Mode, Children will Be Able To:
	* See Their Tasks
	* View Their Progress Through Incomplete Task Goals
	* See the family scoreboard for all competing children in the family.  

* ---------------------------MVP-------------------------------------

* ----------------------STRETCH GOALS--------------------------------
* Share messages and inside information with other Parents/Admins in the family's account.	
* Befriend admins from other families for messaging, sharing tips, and offering support.

## MODELS 
* Users
	* User Name
	* Password
	* Tots

* Tots
	* Name
	* Image
	* Tasks

* Tasks
	* Type

* Rewards
	* Type

## ROUTES - CRUDing 
* Register/Login Routes
	* register route -> ('/tot-tasks/register') --> POST
	* login route -> ('/tot-tasks/login') --> POST
	* logout route -> ('/tot-tasks/logout') --> GET

* Main Site Routes/Tasks/Speed Challenge Routes
	* main site route -> ('/tot-tasks/') --> GET
	* create task route -> ('/tasks/new') --> POST
    * update/edit task route -> ('/tasks/<id>') --> PUT 
    * delete task route -> ('/tasks/<id>') --> Delete