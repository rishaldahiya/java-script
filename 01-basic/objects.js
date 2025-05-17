

var uesrObj = {

    fname : "rishal",
    age:33,
    contact :"9000680196",
    isLearning : true,
    courses : [],
    addCourse : function(cname){
        this.courses.push(cname);
    },

    courseCount : function(){

        return `user ${this.fname} has taken ${this.courses.length} courses`;
    }

}

console.log("user", uesrObj);

  uesrObj.addCourse("c");
  uesrObj.addCourse("java");

  console.log("user", uesrObj);
   console.log("count", uesrObj.courseCount())




