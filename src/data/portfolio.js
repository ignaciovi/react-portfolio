const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.png",
	"logoWhite": "images/app-logo-white.png",
	"name": 'Ignacio Valdelvira',
	"role": 'Data Science and Full-stack enthusiast',
	"intro": "This is my personal site",
	"projects": [
		{
			"id": 0,
			"title": "Songbinator",
			"imageUrl": "images/portfolio/Songbinator.png",
			"link": "http://songbinator.eu-gb.mybluemix.net/",
			"codeLink": "https://github.com/ignaciovi/Songbinator",
			"description": ["Problem finding a playlist that satisfies the musical taste of you and your group of friends? Give us some artists and we will create you a personalised playlist that everyone will like!"],
			"technology": ["HTML/CSS", "SASS(SCSS)/ CSS Modules/ Styled Component", "React", "Redux"],
		},	
		{
			"id": 1,
			"title": "Modelling the behavior of Unmanned Underwater Vehicles based on previous survey mission data",
			"imageUrl": "images/portfolio/UUVPrediction.png",
			"link": "",
			"codeLink": "",
			"description": ["Master’s Thesis: Involved in all the stages of a Data Science project (data gathering, feature engineering, building models, creating visualizations, making sure the solutions are relevant to the problem) both on Regression and Classification problems (Python)"
				, "A real-life complex problem with multiple influencing factors was reduced to a manipulable simplification, obtaining accurate predictions of the behavior of an unmanned underwater vehicle in untrained environments"
				, "Gained experience in documentation, time management, ability to work independently and design of machine-learning models"],
			"technology": ["Python", "Machine Learning"],
		},
		{
			"id": 2,
			"title": "Bitcoin price prediction using Time Series Forecasting and Sentiment Analysis",
			"imageUrl": "images/portfolio/BitcoinPrediction.png",
			"link": "",
			"codeLink": "",
			"description": ["This project overviews the particular challenges present in" 
				+ "predicting Bitcoin price levels from time series data and provides a comparison"
				+ "of traditional time series forecasting algorithms and Linear models"
				+ "/ Deep Learning models for Bitcoin price prediction." 
				, "Analysing the linkage between news and user opinion postings on public news forums"
				+ "(Twitter, Reddit etc.) and Bitcoin price has also been done."
				, "Benchmark of the models has been done based on price predictability"
				+ "by calculating the regression error scores and prediction of the direction"
				+ "of fluctuation by computing accuracy, precision etc"],
			"technology": ["Python", "NLTK", "ARIMA", "Prophet"],
		},
		{
			"id": 3,
			"title": "Song Genre Prediction",
			"imageUrl": "images/portfolio/SongGenrePrediction.png",
			"link": "",
			"codeLink": "https://github.com/ignaciovi/Song-Genre-Prediction",
			"description": ["In this project we work on predicting the genre of a song based on those audio analysis features."
				+ " The main purpose ot this work is to analyse if the features extracted by Spotify (by unknown audio analysis criteria)"
				+ " allow us to predict music genres only taking that information into consideration."],
			"technology": ["Python", "Machine Learning"]				
		},
		{
			"id": 4,			
			"title": "Tweet Geolocation Prediction",
			"imageUrl": "images/portfolio/TweetLocation.png",
			"link": "",
			"codeLink": "https://github.com/ignaciovi/tweet-geolocation-spain",
			"description": ["We propose a framework for estimating Twitter user's location based solely in the"
				+ "text of the tweets. We will replicate an existing paper: You Are Where You Tweet:" 
				+ "A Content-Based Approach to Geo-locating Twitter Users, a research project which focuses"
				+ " the prediction on US states area. In our project we will aim to predict the Spanish Autonomous"
				+ " Community (AC: first-level political and administrative division in which Spain is divided) "
				+ "from which the tweet belongs."],
			"technology": ["Python", "Machine Learning", "NLP"]			
		}					
		],
	"skills": [
		{
			"name": "Python",
			"percentage": 80
		},
		{
			"name": "SQL",
			"percentage": 70
		},
		{
			"name": "React/Redux",
			"percentage": 70
		},	
		{
			"name": "Javascript",
			"percentage": 70
		},													
	],
	"workExp": [
		{
			"title": "Front-end Developer",
			"date" : 'January 2019- Currently',
			"description": ["Lead developer in a sales website using React.js and Redux which I learned on-site and was able to develop complex functionalities in a short period of time. Worked using Agile (Scrum) methodology to deliver new features" 
				, "Improved sales websites based on Java and Javascript technologies"
				, "Learned the importance of understanding the business in order to deliver well oriented and defined functionalities"],
			"company": 'ScottishPower'
			
		},
		{
			"title": "Data Scientist Intern",
			"date" : 'June 2018 - December 2018',
			"company": 'SeeByte',
			"description": ["Worked on a team to provide insight in the development of data analysis tasks (experience with Elasticsearch and Git)"
				, "Used critical thinking to help define clear goals when the path to follow was fuzzy/not clear at certain stages of the project"
				, "Actively collaborated in weekly meetings were objectives and project follow-up were discussed to fulfil client’s needs"]
		},
		{
			"title": "Summer job",
			"date" : 'July 2017 - August 2017',
			"company": 'Buceo-Malta Scuba Diving Center',
			"description": ["Developed myself in the commercial field and improved interpersonal skills by dealing with clients and attracting new ones to the business"
				, "Improved my ability to be proactive, controlling a situation rather than just responding to it after it has happened"]
		},
		{
			"title": "Software Engineer Intern",
			"date" : 'January 2017 - April 2017',
			"company": 'Air Drone Logistics',
			"description": ["Internship in which I developed an algorithm able to recognize plates of shipping containers as part of my final degree project with MATLAB software. Worked independently and actively sought for input from experts in the field"
			, "Developed Computer Vision and Image Analysis and acquired understanding of OCR techniques"]
		},				
	],
	"education": [
		{
			"title": "MSc Data Science",
			"date" : '2017- 2018',
			"description": ["Awarded with The Data Lab Scholarship"
				, "Core courses: Machine Learning, Statistical Inference, Regression Models, Text as Data (NLP), Big Data (Hadoop, Spark)"
				, "Team project: Bitcoin price prediction using Time Series Forecasting (ARIMA, Prophet, RNN) and Sentiment Analysis (NLTK)"
				, "Thesis: Modelling the behavior of Unmanned Underwater Vehicles based on previous survey mission data (Grade 95/100)"],
			"company": 'University of Glasgow'
			
		},
		{
			"title": "BSc Electromechanical Engineering",
			"date" : '2012 - 2017',
			"company": 'ICAI Universidad Pontificia de Comillas',
			"description": ["Strong background in Algebra, Calculus and Statistics"
				, "First class grade on Final Degree Thesis: Reading with drones of shipping container marking (OCR)"
				, "Diploma in Professional Skills"
				, "Persuasive Communication (1st), Written Communication (1st), Teamwork (2:1) and Personal Skills (2:1)"
				, "Joined Public Speaking workshop for 1 year"
				, "On own initiative, built a Quadcopter from scratch with college friends"]
		},			
	]
 
}

export default portfolioData;