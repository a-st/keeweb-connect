const isFirefox = location.origin.startsWith('moz');

export const supportsUnicodeMenus = true;
export const canUseOnlyAppConnection = true;
export const canEditShortcuts = true;
export const shortcutsCanBeEditedOnlyManually = isFirefox;
export const needRequestPermissionsPerSite = true;
