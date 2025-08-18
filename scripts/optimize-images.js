import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = './public/lovable-uploads';
const outputDir = './public/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseNameWithoutExt = path.parse(filename).name;
  
  try {
    // Get original image info
    const info = await sharp(inputPath).metadata();
    console.log(`Original ${filename}: ${info.width}x${info.height}, ${info.format}, ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB`);
    
    // Create optimized WebP version (high quality)
    const webpPath = path.join(outputDir, `${baseNameWithoutExt}.webp`);
    await sharp(inputPath)
      .resize(800, 600, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    // Create small WebP for thumbnails/logos
    const webpSmallPath = path.join(outputDir, `${baseNameWithoutExt}-small.webp`);
    await sharp(inputPath)
      .resize(400, 300, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpSmallPath);
    
    // Create AVIF version for modern browsers (even smaller)
    const avifPath = path.join(outputDir, `${baseNameWithoutExt}.avif`);
    await sharp(inputPath)
      .resize(800, 600, { 
        fit: 'cover',
        position: 'center'
      })
      .avif({ quality: 75, effort: 6 })
      .toFile(avifPath);
    
    // Get file sizes
    const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(2);
    const webpSmallSize = (fs.statSync(webpSmallPath).size / 1024).toFixed(2);
    const avifSize = (fs.statSync(avifPath).size / 1024).toFixed(2);
    
    console.log(`✅ Generated:
    - ${baseNameWithoutExt}.webp (800x600): ${webpSize}KB
    - ${baseNameWithoutExt}-small.webp (400x300): ${webpSmallSize}KB  
    - ${baseNameWithoutExt}.avif (800x600): ${avifSize}KB`);
    
    return {
      original: (fs.statSync(inputPath).size / 1024).toFixed(2),
      webp: webpSize,
      webpSmall: webpSmallSize,
      avif: avifSize
    };
    
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
    return null;
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = fs.readdirSync(inputDir).filter(file => 
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
  );
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const result = await optimizeImage(inputPath, file);
    
    if (result) {
      totalOriginal += parseFloat(result.original);
      totalOptimized += parseFloat(result.webp);
    }
    console.log('');
  }
  
  console.log(`📊 Summary:
  Total original size: ${totalOriginal.toFixed(2)}KB
  Total WebP size: ${totalOptimized.toFixed(2)}KB
  Space saved: ${(totalOriginal - totalOptimized).toFixed(2)}KB (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
}

main().catch(console.error);