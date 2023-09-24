export enum COLOR_PALLATE{
    LIGHT_PRIMARY_COLOR="#ffffff",
    DARK_PRIMARY_COLOR="#282c34",
}

document.documentElement.style.setProperty('--primary-color', COLOR_PALLATE.LIGHT_PRIMARY_COLOR);
document.documentElement.style.setProperty('--secondary-color', COLOR_PALLATE.DARK_PRIMARY_COLOR);