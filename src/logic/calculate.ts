export function calculate(button: string, state: State): State {
    return state
}

export interface State {
    current: string,
    operand: number,
    operator: string | null,
    isNextClear: boolean
}