import { CliCommandInterface } from '../cli-command/cli-command.interface.js';

export default class CLIApplication {
  private commands: {[propertyName: string]: CliCommandInterface} = {};

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((accumulator, command) => {
      const cliCommand = command;
      accumulator[cliCommand.name] = cliCommand;
      return accumulator;
    }, this.commands);
  }

}
