import { Exercise } from "@prisma/client"

const exercises: Exercise[] = [
  {
    "id": 1,
    "title": "Jumping Jacks",
    "description": "Start with your feet together and arms at your sides, then jump up and spread your feet while raising your arms above your head. Jump again to return to the starting position.",
    "category": "Cardio",
    "duration": 2
  },
  {
    "id": 2,
    "title": "Push-Ups",
    "description": "Begin in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up.",
    "category": "Strength",
    "duration": 2
  },
  {
    "id": 3,
    "title": "Squats",
    "description": "Stand with your feet shoulder-width apart and lower yourself into a sitting position, keeping your weight on your heels. Return to the starting position by pushing up through your heels.",
    "category": "Strength",
    "duration": 2
  },
  {
    "id": 4,
    "title": "Lunges",
    "description": "Start with your feet shoulder-width apart and step forward with one foot. Lower your body until your front knee is at a 90-degree angle, then push back up to the starting position.",
    "category": "Strength",
    "duration": 2
  },
  {
    "id": 5,
    "title": "Crunches",
    "description": "Lie on your back with your knees bent and feet flat on the ground. Lift your head, shoulders, and upper back off the ground, then return to the starting position.",
    "category": "Calisthetics",
    "duration": 2
  },
  {
    "id": 6,
    "title": "Plank",
    "description": "Start in a push-up position, then lower your forearms to the ground. Hold this position, keeping your back straight, for as long as possible.",
    "category": "Strength",
    "duration": 5
  },
  {
    "id": 7,
    "title": "Jump Squats",
    "description": "Begin in a squat position, then jump up explosively. Land back in the squat position and repeat.",
    "category": "Cardio",
    "duration": 2
  },
  {
    "id": 8,
    "title": "Burpees",
    "description": "Begin in a standing position, then drop to a push-up position. Push up, jump your feet back to your hands, then jump up explosively.",
    "category": "Cardio",
    "duration": 2
  },
  {
    "id": 9,
    "title": "Mountain Climbers",
    "description": "Start in a push-up position, then bring one knee up to your chest. Quickly switch legs, as if you are running in place while in the push-up position.",
    "category": "Cardio",
    "duration": 2
  },
  {
    "id": 10,
    "title": "Calf Raises",
    "description": "Stand with your feet shoulder-width apart and lift your heels off the ground. Lower your heels back to the ground, then repeat.",
    "category": "Strength",
    "duration": 2
  },
  {
    "id": 11,
    "title": "Shoulder Taps",
    "description": "Start in a push-up position, then tap your left shoulder with your right hand. Return to the starting position, then tap your right shoulder with your left hand.",
    "category": "Calisthetics",
    "duration": 2
  },
  {
    "id": 12,
    "title": "Burpee Pull-Ups",
    "description": "Perform a burpee, then do a pull-up on a pull-up bar. Repeat for 10 reps or 3 sets of 10 reps.",
    "category": "Strength",
    "duration": 20
  },
  {
    "id": 13,
    "title": "Pistol Squats",
    "description": "Stand on one leg and lower yourself into a squat, keeping your other leg straight out in front of you. Repeat for 10 reps or 3 sets of 10 reps per leg.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 14,
    "title": "Plank Rows",
    "description": "Start in a plank position with a dumbbell in each hand. Row one dumbbell up to your shoulder, then lower it back down. Repeat on the other side. Repeat for 10 reps or 3 sets of 10 reps per side.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 15,
    "title": "Jump Rope",
    "description": "Jump rope continuously for 5 minutes or 3 sets of 5 minutes.",
    "category": "Cardio",
    "duration": 20
  },
  {
    "id": 16,
    "title": "Single-Leg Deadlifts",
    "description": "Stand on one leg and lower a dumbbell down towards the ground, keeping your other leg straight out behind you. Return to the starting position and repeat on the other side. Repeat for 10 reps or 3 sets of 10 reps per leg.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 17,
    "title": "Reverse Lunges",
    "description": "Step back with one leg and lower your body into a lunge. Return to the starting position and repeat on the other side. Repeat for 10 reps or 3 sets of 10 reps per leg.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 18,
    "title": "Tricep Dips",
    "description": "Sit on the edge of a bench or chair and place your hands behind you, fingers facing forward. Lower your body towards the ground, then push back up. Repeat for 10 reps or 3 sets of 10 reps.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 19,
    "title": "Russian Twists",
    "description": "Sit on the ground with your knees bent and feet flat on the ground. Lean back slightly and rotate your torso to the left, then to the right. Repeat for 10 reps or 3 sets of 10 reps per side.",
    "category": "Calisthetics",
    "duration": 15
  },
  {
    "id": 20,
    "title": "Bicycle Crunches",
    "description": "Lie on your back with your hands behind your head and your legs lifted off the ground. Bring your left elbow to your right knee, then switch sides. Repeat for 10 reps or 3 sets of 10 reps per side.",
    "category": "Calisthetics",
    "duration": 15
  },
  {
    "id": 21,
    "title": "Wall Sits",
    "description": "Stand with your back against a wall and lower your body into a seated position, with your knees at a 90-degree angle. Hold this position for 1 minute or 3 sets of 1 minute each.",
    "category": "Calisthetics",
    "duration": 15
  },
  {
    "id": 22,
    "title": "Light Jog",
    "description": "Wearing comfortable clothing and running shoes, lightly jog around the nearest block. Be sure stay clear of traffic and pedestrians.",
    "category": "Cardio",
    "duration": 30
  },
  {
    "id": 23,
    "title": "Hollow-Body Crunch",
    "description": "Lie on your back with your arms straight behind you and legs straight in front of you. Keeping your abdominal muscles tight, lift your legs off the floor and bend your knees in front of you so your feet are facing forward and thighs are in line with your hips. Do as many reps and sets as please.",
    "category": "Calisthetics",
    "duration": 5
  },
  {
    "id": 24,
    "title": "Chin Up",
    "description": "Using a bar just above your height, grab the bar with both hands with your thumbs facing you, then pull yourself to the heigh in which your eyes are obstructed by the bar, and release by straightening your arms. Try for 4 sets of 8-10 reps.",
    "category": "Strength",
    "duration": 15
  },
  {
    "id": 25,
    "title": "Sit-Ups",
    "description": "Lying down on a mat, bend your knees, and lock your feet against overhead resistance, such as the foot of a bed. With both hands behind your head, pull yourself towards your knees. Try for 5 sets of 10 reps.",
    "category": "Strength",
    "duration": 15
  }
];

export default exercises;