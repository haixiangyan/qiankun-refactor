import {createContext} from "react";

interface MicroAppContextState {
  state: any;
  commit: Function;
  dispatch: Function;
}

const initState: MicroAppContextState = {
  state: {},
  commit: () => {},
  dispatch: () => {}
}

const MicroAppContext = createContext<MicroAppContextState>(initState);

export default MicroAppContext
