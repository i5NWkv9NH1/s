import * as yargs from 'yargs'

//? just only need a default value
yargs.demandCommand(1).command('$0', 'the default command', () => {}, (argv) => {

	const regex = new RegExp((argv._[0]) as string)
	const url = argv._[1] as string

	console.log(regex.test(url))
}).argv
