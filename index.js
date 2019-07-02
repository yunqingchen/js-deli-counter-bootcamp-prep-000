function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line){
  var outputString = "The line is currently: "
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    for(var i=0; i<line.length; i++){
      outputString += `${i+1}. ${line[i]}, `
}
}
return outputString.substring(0, outputString.length -2);
}