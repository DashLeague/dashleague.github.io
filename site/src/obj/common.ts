export enum Gamemode{
    Unknown, // 0
    Payload, // 1
    Domination, // 2
    ControlPoint, // 3
    Elimination, // 4
    TDM // 5
}

export function SecondsToStamp(totalSeconds:number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.round(totalSeconds % 60);

    // Pad with leading zeros to maintain HH:MM:SS format
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}