// There are three functions that have been declared for you. You will need to fill in the following code:

// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.
// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.

function scuberGreetingForFeet(someNumber){
  if(someNumber <= 400){
    return 'This one is on me!'
  }else if(someNumber > 2500){
    return 'No can do.'
  }else if(someNumber > 2000){
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(generosity){
  switch(generosity){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}



















// function scuberGreetingForFeet(distance){
//   if(distance <= 400){
//     return 'This one is on me!'
//   }else if(distance > 2500){
//     return 'No can do.'
//   }else if(distance > 2000){
//     return 'I will gladly take your thirty bucks.'
//   }
// }

// function ternaryCheckCity(city){
//   return city === 'NYC'?'Ok, sounds good.' : 'No go.'
// }

// function switchOnCharmFromTip(tip){
//   switch(tip){
//     case 'generous':
//       return 'Thank you so much.'
//     case 'not as generous':
//       return 'Thank you.'
//     case 'thanks for everything':
//       return 'Bye.'
//   }
// }