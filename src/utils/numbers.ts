/**
 * Compact number
 * @param num
 */
export function compactNumber(num?: number){
    return Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(num || 0);
}