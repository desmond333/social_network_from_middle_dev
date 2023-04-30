export const daysSince = (
    date: Date,
    includeYears: boolean = false,
): string => {
    const today = new Date();
    const timeDiff = today.getTime() - date.getTime();
    // Convert milliseconds to days
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (includeYears && daysDiff > 365) {
        const years = Math.floor(daysDiff / 365);
        return `${years} year${years > 1 ? 's' : ''} and ${daysDiff % 365} days`;
    }
    return `${daysDiff} day${daysDiff !== 1 ? 's' : ''}`;
};
