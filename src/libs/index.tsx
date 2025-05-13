export function staticAsset(assetName: string): string {
    return `${import.meta.env.BASE_URL}${assetName}`
}
