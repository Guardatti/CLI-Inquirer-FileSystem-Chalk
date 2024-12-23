import inquirer from "inquirer"

const main = async () => {

    let run = true;

    while (run) {
        const action = await inquirer.prompt([
            {
                type: 'list',
                name: 'itemChoice',
                message: 'Select an option',
                choices: [
                    {
                        value: 1,
                        name: 'New account'
                    },
                    {
                        value: 2,
                        name: 'Show all accounts'
                    },
                    {
                        value: 3,
                        name: 'Exit'
                    }
                ]
            }
        ])
    
        switch (action.itemChoice) {
            case 1:
                break;
    
            case 2:
                break;
    
            case 3:
                run = false;
                break;
    
            default:
                run = false;
                break;
        }
    }

}

main();