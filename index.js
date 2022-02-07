function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (highlight = "*") {
    return (function (phrase = "special") {
        return `You are ${highlight}${phrase}${highlight}!`;
    })
}

// console.log(wrapAdjective("%")("a dedicated programmer"));

// It should return a function
//   - This "inner" function should:
//     - take a single parameter that should default to `"special"`. Name it
//       however you wish.
//     - return a `String` of the form "You are ..." where `...` should be the
//       adjective this function received wrapped in visual flair
// - It should take as parameter a `String` that will be used to create visual flair
// - You may call the parameter whatever you like, but its default value should
//   be `"*"`
// - Call example: `const encouragingPromptFunction = wrapAdjective("!!!")`

// Thus a total call should be:

// ```js
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
// ```
