import instance from "./instance.ts";
import useCallModule from "./call.ts";

export default {
    call: useCallModule(instance),
}