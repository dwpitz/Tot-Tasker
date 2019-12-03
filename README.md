## TOT TASKER - A MOTIVATIONAL, GAMIFIED CHOREBOARD FOR DISTRESSED PARENTS AND FUN LOVIN' TOTS.

## USER STORIES
* Users will be able to:
	* Register an account for their family.
	* Add their tots to the site.
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

	Family {
		users: [User ID - ref],
		tots: [Tot.schema],
		taskNames: [String],
		rewards: [String],
		assignedTasks: [task.schema], // show on scoreboard
		taskArchive: [task.schema], // historical
		speedChallenges: [speedChallenge.schema]
	}

	Users {
		userId: int,
		userName: [String], 
		fullName: [String],
		password: [String],
	}

	Tots {
		name: [String],
		image: img,
		totID: int
	}

	Task {
		tots: tot (From above),
		reward: reward (From above),
		times til reward: int,
		times so far: int,
		date
		taskID: 
	}

	SpeedChallenge {
		task: task (From above),
		time: 
		taskToBump: (id)
		howMuch: 
	}

## ROUTES - CRUDing 
* Register/Login Components - Users
	* register route - ('/user/register') --> POST
	* login route - ('/user/login') --> POST
	* logout route - ('/user/logout') --> GET
	* tots post route? - ('/user/<userId>/tots') --> POST

* Main Dashboard Components/Routes
	* main dashboard route - ('/user/<userId>') --> GET
	* tot component - lists all tots & their active tasks - ('/user/<userID>/tots/tasks') --> GET
	* tot edit component - Let's user add or subtract from task progress.  Let's 
		user update tasks - ('/user/<userId>/tots/<tot_id>/tasks/<taskID>/edit')
	* scoreboard - ('/tots/<tot_id>') - GET
	* + / - scoring component - ('/tots/<totID>/tasks/<taskID>') --> GET
	* Speed Challenge - See below...

* Task Adder/Editer
	* assign tots route - ('/user/<userId>/tots') --> GET
	* add task route - ('/tasks') --> POST
    * edit task route - ('/tasks/<task_id>') --> PUT 
    * delete task route - ('/tasks/<task_id>') --> Delete

* Speed Challenge
	* speed challenge dashboard - ('/user/<userId>/tots/<totID>') --> GET
	* assign tots route - ('/user/<userId>/tots') --> GET
	* task component - ('/tasks') --> POST
	* submit component - /tots/<tot_id>/<task_id>' --> POST


* Tot Mode
	* scoreboard (from above) - (/tots/<tot_id>') - GET
	* tot component (from above) - lists all tots & their active tasks - ('/user/<userID>/tots/tasks') --> GET




