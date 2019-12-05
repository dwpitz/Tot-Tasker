## TOT TASKER - A MOTIVATIONAL, GAMIFIED CHOREBOARD FOR DISTRESSED PARENTS AND FUN LOVIN' TOTS.

## USER STORIES
* Users will be able to:
	* Register an account for their family.
	* Add their tots to the family account.
	* See Tots current tasks/progress towards task goals on the main dashboard.
	* Assign New Tasks To Tots via the Task Adder
	* Set the number of times a Tot must complete said Task to achieve a goal.
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

	Family {
		tots: [Tot.schema],
		tasks: [String],
		completedTasks: [task.schema], // show on scoreboard
		taskArchive: [task.schema], // historical
		email: String, 
		familyName: String,
		password: String,
		admin1: String,
		admin2: String,
		admin3: String
	}

	Tots {
		name: [String],
		imageURL: String,
		tasks: [String]
	}

	Tasks {
		tots: tot (From above),
		reward: String,
		coundownToCompletion: int,
		countSoFar: int (0 by default),
		date: Date
	}

## ROUTES - CRUDing 
* Register/Login Components - Users - Change to family...
	* register route - ('/family/register') --> POST
	* login route - ('/family/login') --> POST
	* logout	 route - ('/family/logout') --> GET
	* tots post route - ('/tots/<familyId>') --> POST

* Main Dashboard Components/Routes - family ids
	* main dashboard route - ('/family/<familyId>') --> GET
	* + / - scoring component - ('/tasks/<familyId>') --> PUT

* Task Adder/Editer
	* add task route - ('/tasks') --> POST
    * edit task route - ('/tasks/<familyId>') --> PUT 
    * delete task route - ('/tasks/<familyId>') --> Delete



