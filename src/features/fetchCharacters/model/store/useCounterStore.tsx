import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CounterSchema {
    counter: number;
}

interface CounterStore extends CounterSchema {
    increase: () => void;
    decrease: () => void;
}

const initState: CounterSchema = { counter: 0 };

export const useCounterStore = create<CounterStore>()(
    devtools((set) => ({
        ...initState,
        increase: () => set((state) => ({ counter: state.counter + 1 })),
        decrease: () => set((state) => ({ counter: state.counter - 1 })),
    }))
);
