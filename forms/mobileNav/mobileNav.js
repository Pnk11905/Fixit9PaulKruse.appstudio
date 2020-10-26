

hmbMenu.onclick=function(s){
      if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Dessert Voting":
                // Change form  to dessertVoting 
                ChangeForm(dessertVoting)
                break
            case "Describe Me":
                //Change form  to  describeYou
                ChangeForm(describeYou)
                break
             case "Favorite Foods":
                //Change form  to  ExtraCreditFavFoods
                ChangeForm(ExtraCreditFavFoods)
                break
                 case "Favorite Exercises":
                //Change form  to  describeYou
                ChangeForm(favExercises)
                break
                      case "Login":
                //Change form  to  describeYou
                ChangeForm(Login)
                break
       }  //switch
   } //else
}
