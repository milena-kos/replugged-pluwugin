import { Injector, common } from "replugged";
import { uwuify } from "./helpers";

const inject = new Injector();

export function start(): void {
  inject.after(common.messages, "sendMessage", (args) => {
    const { content } = args[1];

    args[1].content = uwuify(content);

    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
