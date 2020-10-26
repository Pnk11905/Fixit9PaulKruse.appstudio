// Promised extra credit for Paul Kruse & Derek Richard in class 10/14/2020 

// create food array.
let food = ['Apple', 'Banana', 'Orange', 'Cherry', 'Pineapple', 'Watermelone', 'Mango']

//populate listgroup with array items 
ExtraCreditFavFoods.onshow=function(){
  lstFood.clear()
  for (i = 0; i < food.length; i++)
    lstFood.addItem(food[i])
}

  //onclick display message in label 
lstFood.onclick=function(s){
      if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
lstFood.value= s   // make dropdown show choice user made
lblAnswer.value =`The user chose index ${s} which is affiliated with ${lstFood.selection} as favorite food.`
  }
}

//Change form on button click 
btnChange.onclick=function(){
  ChangeForm(dessertVoting)
}
