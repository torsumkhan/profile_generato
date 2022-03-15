const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
    console.log(`Thank you for your valuable feedback: ${name}`);

    rl.question('What\'s an activity you like doing? ', (activity) => {
        console.log(`Thank you for your valuable feedback: ${activity}`);

        rl.question('What do you listen to while doing that? ', (music) => {
            console.log(`Thank you for your valuable feedback: ${music}`);
    
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (dinner) => {
                console.log(`Thank you for your valuable feedback: ${dinner}`);
        
                rl.question('What\'s your favourite thing to eat for that meal? ', (fav) => {
                    console.log(`Thank you for your valuable feedback: ${fav}`);

                    rl.question('Which sport is your absolute favourite? ', (sport) => {
                        console.log(`Thank you for your valuable feedback: ${sport}`);
                
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
                            console.log(`Thank you for your valuable feedback: ${power}`);

                            console.log(`${name} loves listening to ${music} while ${activity}, devouring ${fav} for ${dinner}, prefers ${sport} over any other sport, and is amazing at ${power}.`)
                    
                            rl.close();
                            
                          });
        
                      });
 
                  });
                
              });
            
          });
        
      });

  });

  
