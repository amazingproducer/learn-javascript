// CODE here for your Lambda Classes
// Person is base class, containing name/age/location props and speak method

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase =instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    } 
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    assess(student) {
        this.maxFail = -10;
        this.maxPass = 10;
        if(!student.grade) {
            student.grade = 0;
        }
        student.lastAssessmentValue = Math.floor(Math.random() * (this.maxPass - this.maxFail + 1) + this.maxFail);
        student.previousGrade = student.grade;
        student.grade = student.previousGrade + student.lastAssessmentValue;
        return `Grade reassessed for ${student.name} by ${this.name}: ${student.previousGrade}->${student.grade} (${student.lastAssessmentValue}). ${student.graduate()}`
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listSubjects() {
        // list student's subjects, one per line, in log
        return this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    };
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    graduate() {
        if(this.grade > 70) {
            return `${this.name} is eligible to graduate.`;
        } else {
            return `${this.grade} is too low of a grade for ${this.name} to graduate.`;
        }
    };
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const harry = new Student({
    name: "harry",
    favSubjects: ["spells", "potions", "husbandry"],
//    grade: Math.floor(Math.random() * 101),
    previousBackground: "closet squatter",
});

const barry = new ProjectManager({
    name: "barry",
    favInstructor: "Life itself",
})

console.log(harry.grade);
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
console.log(barry.assess(harry));
