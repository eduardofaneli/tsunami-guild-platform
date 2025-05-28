/**
 * AssetService - Handles asset path resolution across environments
 */

export const ASSET_TYPES = {
  IMAGES: 'images',    // Para /public/assets/images/
  ICONS: 'icons',      // Para /public/assets/icons/ (ex: ícones de classes)
  DATA: 'data',        // Para /public/ (ex: classes_tl.json, fav-icon.png)
  WEAPONS: 'weapons'   // Para /public/assets/weapons/
} as const;

export type AssetType = typeof ASSET_TYPES[keyof typeof ASSET_TYPES];

/**
 * Resolves the correct path for an asset based on Vite's BASE_URL and asset type.
 *
 * @param filename - The name of the file of the asset (ex: 'my-icon.png').
 * @param type - The type of asset (AssetType), used to determine the subfolder.
 * @returns The complete and correct path to the asset.
 */
export const getAssetPath = (filename: string, type: AssetType): string => {
  if (!filename) return '';

  // Remove leading slash from filename to avoid issues
  const cleanFilename = filename.startsWith('/') ? filename.substring(1) : filename;

  // For external URLs (http/https), return as is
  if (cleanFilename.startsWith('http://') || cleanFilename.startsWith('https://')) {
    return cleanFilename;
  }

  const baseUrl = import.meta.env.BASE_URL; // Vem da config 'base' do vite.config.ts

  let subfolder = '';
  switch (type) {
    case ASSET_TYPES.IMAGES:
      subfolder = 'assets/images/';
      break;
    case ASSET_TYPES.ICONS:
      subfolder = 'assets/icons/';
      break;
    case ASSET_TYPES.WEAPONS:
      subfolder = 'assets/weapons/';
      break;
    case ASSET_TYPES.DATA:
      subfolder = ''; // Arquivos de dados ficam na raiz de public (após o baseUrl)
      break;
    default:
      // Opcional: logar um aviso se um tipo desconhecido for passado
      console.warn(`[AssetService] Unknown asset type: ${type as string}`);
      subfolder = ''; // Ou tratar como erro
  }

  // Normaliza o baseUrl para sempre terminar com '/' se não for apenas '/' e não estiver vazio
  let normalizedBaseUrl = baseUrl;
  if (normalizedBaseUrl !== '/' && normalizedBaseUrl !== '' && !normalizedBaseUrl.endsWith('/')) {
    normalizedBaseUrl += '/';
  } else if (normalizedBaseUrl === '') {
    normalizedBaseUrl = '/';
  }

  const fullPath = `${normalizedBaseUrl}${subfolder}${cleanFilename}`;

  return fullPath.replace(/\/\//g, '/');
};

/**
 * Gets the base path defined by Vite's configuration.
 */
export const getBasePath = (): string => {
  return import.meta.env.BASE_URL;
};

/**
 * Helper for common assets.
 */
export const commonAssets = {
  logo: () => getAssetPath('fav-icon.png', ASSET_TYPES.DATA),
  discord: () => getAssetPath('discord.svg', ASSET_TYPES.DATA),
  classes: () => getAssetPath('classes_tl.json', ASSET_TYPES.DATA),
  weaponIcon: (weaponFilename: string) => getAssetPath(weaponFilename, ASSET_TYPES.WEAPONS), // ex: 'greatsword.webp'
  classIcon: (iconFilename: string) => getAssetPath(iconFilename, ASSET_TYPES.ICONS)      // ex: 'gladiator.png'
};