radDescribeYou.onchange=function(){
  lblDescribeYou.value = `I agree you are a very ${$("input[name=radDescribeYou]:checked").prop("value")} person!`
}



btnDescribeYou.onclick=function(){
  ChangeForm(favExercises)
}
