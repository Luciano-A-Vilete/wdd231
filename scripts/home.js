//Drop down menu on mobile screen
const button = document.querySelector('#burger-menu');

button.addEventListener('click', function() {
    const dropDownBox = document.querySelector('#drop-down');

dropDownBox.classList.toggle('show');

if (dropDownBox.classList.contains ('show')) {
    if (!dropDownBox.querySelector('a')) {
        // create elements
        const home = document.createElement('a');
            home.textContent = "Home";
            home.href = "index.html";
            const chamber = document.createElement('a');
            chamber.textContent = "Chamber";
            chamber.href = "";
            const git = document.createElement('a');
            git.textContent = "GitHub Profile";
            git.href = "https://github.com/samcreviston";
            const linkedIn = document.createElement('a');
            linkedIn.textContent = "LinkedIn";
            linkedIn.href = "https://www.linkedin.com/in/sam-creviston-2729b0288/";

            // Append elements
            dropDownBox.append(home);
            dropDownBox.append(chamber);
            dropDownBox.append(git);
            dropDownBox.append(linkedIn);
            dropDownBox.append(small);
        }
    } else {
        // Remove all <h2> elements when hiding
        dropDownBox.innerHTML = '';
    }
});


//class course list upon button click
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseSection = document.querySelector('#courses-sec');
const allButton = document.querySelector('#all-button');
const CSEButton = document.querySelector('#CSE-button');
const WDDButton = document.querySelector('#WDD-button');

//loop through each course in the courses array
function displayCourses(courseArray) {
    courseSection.textContent = '';

    courseArray.forEach(course => {
        //create and add course card
        const cName = document.createElement('h2');
        cName.textContent = course.subject + " " + course.number;
        cName.classList.add('course');

        //determine if completed
        if (course.completed) {
            cName.classList.add('completed');

        //add to running total of credits
        }

        //append to courses section
        courseSection.appendChild(cName);
    });

    courseDiv.addEventListener('click', () => {
        DisplayCoursesDetails(courses);
    });
}

// add event listeners for course selection buttons
// had to learn how to call thee function without invoking it upon opening the site
allButton.addEventListener('click', () => displayCourses(courses));

CSEButton.addEventListener('click', function() {
    const CSEcourses = [];

    courses.forEach(course => {
        if (course.subject == "CSE") {
            CSEcourses.push(course);
        }
        displayCourses(CSEcourses);
    });
});

WDDButton.addEventListener('click', function() {
    const WDDcourses = [];

    courses.forEach(course => {
        if (course.subject == "WDD") {
            WDDcourses.push(course);
        }
        displayCourses(WDDcourses);
    });
});
 
function DisplayCoursesDetails(course){
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        couseDetails.close();
    });
}
/*
allButton.addEventListener('click', function() {
    courses.forEach(course => {
        //create and add course card
        const cName = document.createElement('h2');
        cName.textContent = course.subject + " " + course.number;
        cName.classList.add('course');

        //determine if completed
        if (course.completed) {
            cName.classList.add('completed');

        //add to running total of credits
        }

        //append to courses section
        courseSection.appendChild(cName);
    });

})
*/