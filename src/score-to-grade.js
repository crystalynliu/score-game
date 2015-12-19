function single_element (score) {
    var grade = '';
    if(score<=100 && score >=90){
        grade = 'S';
    }else if(score<90 && score>=80){
        grade ='A';
    }else if(score<80 && score>=70){
        grade = 'B';
    }else if(score<70 && score>=60){
        grade = 'C';
    }else if(score<60 && score>=0){
        grade = 'D';
    }else if(score>100 || score<0){
        throw new TypeError ("input invalid");
    }else{
        throw new TypeError("input is not a number");
    }

    return grade;
}
