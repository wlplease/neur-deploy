/**
 * Format utilities for displaying data
 */

/**
 * Format user creation date
 */
export function formatUserCreationDate(date: string | undefined): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format wallet address for display
 */
export function formatWalletAddress(
  address: string | undefined,
  length: number = 5,
): string {
  if (!address) return 'Anonymous';
  const start = address.slice(0, length);
  const end = address.slice(-length);
  return `${start}...${end}`;
}

/**
 * Helper function to format a number to short notation:
 * e.g. 1_100_000 => 1.1M, 466_800 => 466.8K
 */
export function formatShortNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(2) + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'K';
  }
  return value.toFixed(2);
}

/**
 * Format Privy ID by removing prefix
 */
export function formatPrivyId(id: string | undefined): string {
  if (!id) return '';
  return id.replace('did:privy:', '');
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
