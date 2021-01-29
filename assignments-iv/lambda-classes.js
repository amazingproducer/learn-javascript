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
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
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
    previousBackground: "closet squatter",
});

const barry = new ProjectManager({
    name: "barry",
    favInstructor: "Life itself",
})

console.log(harry.favSubjects.length);
console.log(harry.listSubjects());
console.log(barry.debugsCode(harry, "self driving cars"))