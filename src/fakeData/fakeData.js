var onLineCourse = [
	{
	id: 1,
	courseName: 'Adobe Photoshop',
	courseDuration: '2 months',
	cost:12,
	trainer:'Kristofer Jorge',
	courseContent:['Background editing','Image filtering','Banner design','Flayer design','Landing page design','PSD templet design']
	
	},
	{
		id: 2,
		courseName: 'Adobe Illustrator',
		courseDuration: '2 months',
		cost:13,
		trainer:'Pramanik Masud',
		courseContent:['Image editing','Clipping path','Banner design','Broucher design','Logo design','PSD templet design']
	}
	,
	{
		id: 3,
		courseName: 'Graphics Design',
		courseDuration: '3 months',
		cost:20,
		trainer:'MAK Azad',
		courseContent:['Background editing','Image filtering','Banner design','Flayer design','Landing page design','PSD templet design']
	},
	{
		id: 4,
		courseName: 'Digital Marketing',
		courseDuration: '2 months',
		cost:9,
		trainer:'Andrew Hocks',
		courseContent:['Marketing strategy analysis','Data analysis','Off page SEO','Onpage SEO']
	},
	{
		id: 5,
		courseName: 'Web Design',
		courseDuration: '1.5 months',
		cost:12,
		trainer:'Zusek Marmont',
		courseContent:['HTML 5','CSS 3','Javascript','Bootstrap','UI-kit','Landing page design','Basic PHP']
	},
	{
		id: 6,
		courseName: 'Web Development',
		courseDuration: '2 months',
		cost:13,
		trainer:'Kristofer Jorge',
		courseContent:['PHP','SQL','Server management','React','GIT','CMD']
	},
	{
		id: 7,
		courseName: 'Laravel',
		courseDuration: '1.5 months',
		cost:10,
		trainer:'Thomas Udoyo',
		courseContent:['Framework Design','Server management','Woo-commerce wepage design']
	},
	{
		id: 8,
		courseName: 'Data Science',
		courseDuration: '1.5 months',
		cost:9,
		trainer:'Ferdous Kamal',
		courseContent:['Data management','Data analysis','Data filtering','Server management','Data staticis','PSD templet design']
	},
	{
		id: 9,
		courseName: 'Phonetics',
		courseDuration: '3 months',
		cost:15,
		trainer:'Sabbir Ahmed',
		courseContent:['Audio tools','Debate Club','Presentation','Basic grammar','Basic error']
	},
	{
		id: 10,
		courseName: 'English fluency',
		courseDuration: '2 months',
		cost:17,
		trainer:'Monika Senet',
		courseContent:['e-book','Writting skill','Vocabulary','Basic grammar','Basic error']
	},
	{
		id: 11,
		courseName: 'Basic Computer',
		courseDuration: '1.5 months',
		cost:16,
		trainer:'Jafor Sheikh',
		courseContent:['MS Word','MS Excel','Power point','Excess','Databse','Basic Hardware & Software']
	},
	{
		id: 12,
		courseName: 'React',
		courseDuration: '1.5 months',
		cost:9,
		trainer:'Jahan Hayder',
		courseContent:['Basic Javascript','Modern Javascript','Various Hooks','various methods ','Various scop']
	},
	{
		id: 13,
		courseName: 'Python',
		courseDuration: '1.5 months',
		cost:10,
		trainer:'Sumoto Kain',
		courseContent:['Basic Concept','Loop','array','object','Various oparetors','various methods ','Various scop']
	},
	{
		id: 14,
		courseName: 'Android App Development',
		courseDuration: '3 months',
		cost:25,
		trainer:'Kristofer Jorge',
		courseContent:['Basic Concept','Various oparetors','various methods ','Various scop']
	},
	{
		id: 15,
		courseName: 'Enterpranure skill Development',
		courseDuration: '2 months',
		cost:18,
		trainer:'Jeos Portia',
		courseContent:['Event management','Business skill development','presentation','Risk handling']
	},
	{
		id: 16,
		courseName: 'IT & Software',
		courseDuration: '3 months',
		cost:23,
		trainer:'Tribedi Hencier',
		courseContent:['Server management','Relations with server & software','Project build-up']
	},
	{
		id: 17,
		courseName: 'Interior Design',
		courseDuration: '1 months',
		cost:23,
		trainer:'Nahid Al Farabi',
		courseContent:['Interior management','Project show', 'Build up creativity']
	},
	{
		id: 18,
		courseName: 'Theme Forest',
		courseDuration: '3 months',
		cost:27,
		trainer:'Josef Arnezgar',
		courseContent:['Basic theme management','Relations management','Project build-up']
	},
	{
		id: 19,
		courseName: 'Angular',
		courseDuration: '1.5 months',
		cost:11,
		trainer:'Arnold Rasel',
		courseContent:['Server management','Relations with server & software','Project build-up']
	},
	{
		id: 20,
		courseName: 'Photograghy',
		courseDuration: '2 months',
		cost: 21,
		trainer:'Al Kamal',
		courseContent:['Image Idea', 'Creativity development','Tools management']
	}
];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(onLineCourse);

export default onLineCourse;

