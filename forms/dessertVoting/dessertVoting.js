
// dessert array 
let dessert = ['Cheesecake', 'Cream Brulee' , 'Apple Pie', 'Ice Cream', 'Cookies', 'Pudding']

//onshow  -.clear dropdown - generate dropdown population
dessertVoting.onshow=function(){
    drpDessert.clear()
  for (i = 0; i < dessert.length; i++)
      drpDessert.addItem(dessert[i])
}

//Generate user choice message in label 
drpDessert.onclick=function(d){
   if (typeof(d) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpDessert.value= d   // make dropdown show choice user made
lblDessert.value = (` You picked ${drpDessert.selection} -that is a great choice!`)
  }
}


BtnNextForm.onclick=function(){
  ChangeForm(describeYou)
}
