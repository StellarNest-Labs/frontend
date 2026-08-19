import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/data';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d1712 0%, #123023 55%, #0d1712 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 420,
            height: 420,
            borderRadius: '50%',
            border: '2px solid #3fcd97',
            opacity: 0.55,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '2px solid #eabf5c',
            opacity: 0.7,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 180,
            height: 180,
            borderRadius: '50%',
            border: '2px solid #3fcd97',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#eabf5c',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 470,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: '#f3efe2',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#9fab9f',
              marginTop: 14,
              display: 'flex',
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
