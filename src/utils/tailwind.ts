export const twMerge = (...args: string[]) => {
    return args.filter(Boolean).join(' ');
}