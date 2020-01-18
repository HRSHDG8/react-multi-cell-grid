import dark from './DarkTheme.css';
import light from './LightTheme.css';
export enum Theme {
    light = "light", dark = "dark"
}

export function createTheme(theme?: Theme) {
    switch (theme) {
        case Theme.dark:
            return dark;
        case Theme.light:
            return light;
        default:
            throw new Error("Unsupported theme provided");
    }
}