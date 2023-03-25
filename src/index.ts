import { Injector, common } from "replugged";
import Uwuifier from "uwuifier";

const uwuifier = new Uwuifier();

const inject = new Injector();

export function start(): void {
  inject.after(common.messages, "sendMessage", (args) => {
    const { content } = args[1];

    args[1].content = uwuifier.uwuifySentence(content);

    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
