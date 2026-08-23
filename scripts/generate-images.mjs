// Generates PNG assets from the SVG sources in logo/
// Usage: node scripts/generate-images.mjs
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const logoDir = join(root, 'logo')

const jobs = [
    { svg: 'logo.svg', out: 'logo.png', width: 1280 },          // Fiken / invoice use
    { svg: 'logo-white.svg', out: 'logo-white.png', width: 1280 },
    { svg: 'icon-a.svg', out: 'icon-a.png', width: 512 },       // favicon / app icon
    { svg: 'icon-a.svg', out: 'icon-a-64.png', width: 64 },     // small favicon
    { svg: 'og-image.svg', out: 'og-image.png' },               // 1200x630 social preview
]

for (const job of jobs) {
    const svg = readFileSync(join(logoDir, job.svg), 'utf8')
    const resvg = new Resvg(svg, {
        fitTo: job.width ? { mode: 'width', value: job.width } : { mode: 'original' },
    })
    const png = resvg.render().asPng()
    const outPath = join(logoDir, job.out)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, png)
    console.log(`✓ ${job.out} (${png.length} bytes)`)
}
