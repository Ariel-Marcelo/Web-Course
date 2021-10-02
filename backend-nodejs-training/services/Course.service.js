class CourseService{
    static _courseServiceInstance = null; // en javascript no tenemos modificadores de acceso como private , protect
    // el guión bajo indica un modificador de acceso ya que por defecto todo es público

    static getInstance(){
        if(CourseService._courseServiceInstance === null){
            CourseService._courseServiceInstance = new CourseService();
        }
        return CourseService._courseServiceInstance; 
    }

    
}

module.exports = CourseService;