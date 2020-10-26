var exercises = ["pullups","pushups", "situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selFavExercises.clear()
  for (i = 0; i <= exercises.length - 1; i++) {
       selFavExercises.addItem(exercises[i])
       }
}

btnFavExercisesSubmit.onclick=function(){
  if (selFavExercises.text[0] == coreExercises[0] && selFavExercises.text[1] == coreExercises[1]) {
    lblFavExercises.value = "You chose " + selFavExercises.text[0] +" and " + selFavExercises.text[1] + " - those are the two core exercises." 
    } else { 
      lblFavExercises.value = "You did not pick the two core exercises"
    }
}
btnFavExercises.onclick=function(){
  ChangeForm(mobileNav)
}

