/**
 * AssetService - Handles asset path resolution across environments
 * 
 * Provides a robust way to access assets regardless of environment (local dev or production)
 */

// Environment configuration for asset paths
interface AssetConfig {
  basePath: string;
  assetFolders: {
    images: string;
    icons: string;
    data: string;
    weapons: string;
  };
}

// Environment-specific configurations
const environmentConfigs: Record<string, AssetConfig> = {
  development: {
    basePath: '',
    assetFolders: {
      images: '/images',
      icons: '/assets',
      data: '',
      weapons: '/assets/weapons'
    }
  },
  production: {
    basePath: '/tsunami-guild-platform',
    assetFolders: {
      images: '/images',
      icons: '/assets',
      data: '',
      weapons: '/assets/weapons'
    }
  }
};

// Determine current environment
const currentEnv = import.meta.env.DEV ? 'development' : 'production';
const config = environmentConfigs[currentEnv];

// Asset types as literals
const ASSET_TYPES = {
  IMAGES: 'images',
  ICONS: 'icons',
  DATA: 'data',
  WEAPONS: 'weapons'
} as const;

// Type for asset types
type AssetType = typeof ASSET_TYPES[keyof typeof ASSET_TYPES];

/**
 * Resolves the correct path for an asset based on environment and asset type
 * 
 * @param path - The relative path to the asset
 * @param type - The type of asset being requested
 * @returns The complete path to the asset
 */
export const getAssetPath = (path: string, type: AssetType): string => {
  if (!path) return '';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For external URLs (http/https), return as is
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  // Para paths completos com /assets/ já incluído
  if (cleanPath.includes('/assets/') || cleanPath.startsWith('assets/')) {
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `${config.basePath}${normalizedPath}`;
  }
  
  // For data assets, we don't need the folder path
  if (type === ASSET_TYPES.DATA) {
    return `${config.basePath}/${cleanPath}`;
  }
  
  // Type assertion to ensure TypeScript doesn't complain about index access
  const folderPath = config.assetFolders[type as keyof typeof config.assetFolders];
  return `${config.basePath}${folderPath}/${cleanPath}`;
};

/**
 * Gets the base path for the current environment
 * 
 * @returns The base path
 */
export const getBasePath = (): string => {
  return config.basePath;
};

/**
 * Helper for common assets
 */
export const commonAssets = {
  logo: () => getAssetPath('fav-icon.png', ASSET_TYPES.ICONS),
  classes: () => getAssetPath('classes_tl.json', ASSET_TYPES.DATA),
  weaponIcon: (weaponName: string) => getAssetPath(`${weaponName.toLowerCase()}.webp`, ASSET_TYPES.WEAPONS)
};

// Export asset types for use in components
export const AssetType = ASSET_TYPES;
