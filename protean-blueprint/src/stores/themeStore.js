import { writable, derived } from 'svelte/store';

export const brightness = writable("dark");
export const temperature = writable("neutral");

// BackgroundColors
export const bg_elev_0 = derived(
	brightness,
    $brightness => { 
        switch ($brightness) {
            case "bright": return "bg-white";
            case "dark": return "bg-black";
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const bg_elev_1 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-100";
                    case "cool": return "bg-slate-100";
                    case "warm": return "bg-stone-100";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-900";
                    case "cool": return "bg-slate-900";
                    case "warm": return "bg-stone-900";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const bg_elev_2 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-200";
                    case "cool": return "bg-slate-200";
                    case "warm": return "bg-stone-200";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-800";
                    case "cool": return "bg-slate-800";
                    case "warm": return "bg-stone-800";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const bg_elev_3 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-300";
                    case "cool": return "bg-slate-300";
                    case "warm": return "bg-stone-300";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-700";
                    case "cool": return "bg-slate-700";
                    case "warm": return "bg-stone-700";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const bg_elev_4 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-400";
                    case "cool": return "bg-slate-400";
                    case "warm": return "bg-stone-400";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-600";
                    case "cool": return "bg-slate-600";
                    case "warm": return "bg-stone-600";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const bg_elev_5 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-500";
                    case "cool": return "bg-slate-500";
                    case "warm": return "bg-stone-500";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "bg-zinc-500";
                    case "cool": return "bg-slate-500";
                    case "warm": return "bg-stone-500";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);

// Text Elevation
export const text_elev_0 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "text-zinc-500";
                    case "cool": return "text-slate-500";
                    case "warm": return "text-stone-500";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "text-zinc-500";
                    case "cool": return "text-slate-500";
                    case "warm": return "text-stone-500";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const text_elev_1 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "text-zinc-700";
                    case "cool": return "text-slate-700";
                    case "warm": return "text-stone-700";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "text-zinc-300";
                    case "cool": return "text-slate-300";
                    case "warm": return "text-stone-300";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);
export const text_elev_2 = derived(
	[brightness, temperature],
	([$brightness, $temperature]) => { 
        switch ($brightness) {
            case "bright":
                switch ($temperature) {
                    case "neutral": return "text-zinc-900";
                    case "cool": return "text-slate-900";
                    case "warm": return "text-stone-900";
                    default: throw new Error("Brightness: 'bright'\nTemperature: Not Valid");
                }
            case "dark":
                switch ($temperature) {
                    case "neutral": return "text-zinc-100";
                    case "cool": return "text-slate-100";
                    case "warm": return "text-stone-100";
                    default: throw new Error("Brightness: 'dark'\nTemperature: Not Valid");
                }
            default: throw new Error("Brightness: Not Valid");
        }
    }
);