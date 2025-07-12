// ++++++++++++++++++++++++++++++++++++++++++++ Destructuring ++++++++++++++++++++++++++++++++++++

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

//first method
console.log(course.coursename);

// second method
// here once we declae this then we can use it directly without (.) operator  we can use it multiple times
const { courseInstructor } = course;

console.log(courseInstructor);


// we can also create an altername name for that data 
const { courseInstructor: inst } = course;

console.log(inst);


// +++++++++++++++++++++++++++++++++++++++++++++ APIs +++++++++++++++++++++++++++++++++++++++++=

{
    "name": "chaitanya",
        "email": "chaitanyakumar1401@gmail.com"
}




