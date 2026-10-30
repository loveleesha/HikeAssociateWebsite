import { ImageResponse } from 'next/og'
import { hero } from '@/data/site'
import { BrandMark } from '@/lib/brandMark'

export const alt = 'Hike Associate: Building Trust. Recovering Value.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 80,
        color: '#fff',
        background: 'linear-gradient(115deg, #031026 22%, #04204a 62%, #042c66)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 40, fontWeight: 700 }}>
        <BrandMark width={104} />
        Hike Associate
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 56, fontSize: 84, fontWeight: 700 }}>
        <span>{hero.titleLines[0]}</span>
        <span style={{ color: '#3cd4f7' }}>{hero.titleLines[1]}</span>
      </div>
      <div style={{ marginTop: 36, fontSize: 32, color: '#d5deea' }}>{hero.eyebrow.join('  •  ')}</div>
    </div>,
    size,
  )
}
